import React, { FormEvent, KeyboardEvent, RefObject, SyntheticEvent, useEffect, useRef, useState } from "react";
import { useAuth } from "../../../modules/auth";
import AutoResizeTextArea from "../../../../features/components/AutoResizeTextArea";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../../store/store";
import { PostUtils } from "../../../../shared/utils/post-utils.service";
import { readAsBase64 } from "../../../../shared/utils/image-utils.service";
import { postService } from "../../../../shared/services/post.service";
import { closeModal, openModal } from "../../../../shared/reducers/modal/modal.reducer";
import { bgColors } from "../../../../shared/utils/static.data";
import './PublishCard.scss'

const PublishCard: React.FC = () => {
  const { currentUser } = useAuth();
  const { gifModalIsOpen, feeling } = useSelector((state: RootState) => state.modal);
  const { gifUrl, image, privacy, video } = useSelector((state: RootState) => state.post);
  const { profile } = useSelector((state: RootState) => state.user);
  const [loading, setLoading] = useState(false);
  const [hasVideo, setHasVideo] = useState(false);
  const [postImage, setPostImage] = useState('');
  const [allowedNumberOfCharacters] = useState('100/100');
  const [textAreaBackground, setTextAreaBackground] = useState('#ffffff');
  const [postData, setPostData] = useState({
    post: '',
    bgColor: textAreaBackground,
    privacy: '',
    feelings: '',
    gifUrl: '',
    profilePicture: '',
    image: '',
    video: ''
  });
  const [disable, setDisable] = useState(true);
  const [apiResponse, setApiResponse] = useState('');
  const [selectedPostImage, setSelectedPostImage] = useState(null);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const counterRef = useRef<HTMLSpanElement | null>(null);
  const inputRef = useRef<RefObject<HTMLDivElement> | null>(null);
  const imageInputRef = useRef<RefObject<HTMLDivElement> | null>(null);
  const dispatch = useDispatch();

  const maxNumberOfCharacters = 100;

  const selectBackground = (bgColor: string) => {
    PostUtils.selectBackground(bgColor, postData, setTextAreaBackground, setPostData);
  };

  const postInputEditable = (event: FormEvent<HTMLTextAreaElement>) => {
    const text = event.currentTarget.value;
    if (!text || text.length == 0) return
    const currentTextLength = text.length || 0;
    const counter = maxNumberOfCharacters - currentTextLength;
    if (counterRef.current) counterRef.current.textContent = `${counter}/100`;
    setDisable(currentTextLength <= 0 && !postImage);
    PostUtils.postInputEditable(text, postData, setPostData);
  };

  const closePostModal = () => {
    PostUtils.closePostModal(dispatch);
  };

  const onKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    const currentTextLength = event.currentTarget.textContent?.length || 0;
    if (currentTextLength === maxNumberOfCharacters && event.key !== 'Backspace') {
      event.preventDefault();
    }
  };

  const clearImage = () => {
    setSelectedVideo(null);
    PostUtils.clearImage(postData, '', inputRef.current, dispatch, setSelectedPostImage, setPostImage, setPostData);
  };

  const createPost = async () => {
    setLoading(!loading);
    setDisable(!disable);
    try {
      if (feeling.length) {
        postData.feelings = feeling;
      }
      postData.privacy = privacy || 'Public';
      postData.gifUrl = gifUrl;
      postData.profilePicture = currentUser?.user.profilePicture || '';
      if (selectedPostImage || selectedVideo) {
        let result: string | ArrayBuffer | null = '';
        if (selectedPostImage) {
          result = await readAsBase64(selectedPostImage);
        }

        if (selectedVideo) {
          result = await readAsBase64(selectedVideo);
        }

        // if (selectedImage) {
        //   result = await readAsBase64(selectedImage);
        // }

        // if (selectedPostVideo) {
        //   result = await readAsBase64(selectedPostVideo);
        // }
        const type = selectedPostImage ? 'image' : 'video';
        if (type === 'image') {
          postData.image = result as string;
          postData.video = '';
        } else {
          postData.video = result as string;
          postData.image = '';
        }
        const response = await PostUtils.sendPostWithFileRequest(
          type,
          postData,
          imageInputRef.current,
          setApiResponse,
          setLoading,
          dispatch
        );
        // if (response && response?.data?.message) {
        //   setHasVideo(false);
        //   PostUtils.closePostModal(dispatch);
        // }
      } else {
        const response = await postService.createPost(postData);
        if (response) {
          setApiResponse('success');
          setLoading(false);
          setHasVideo(false);
          // PostUtils.closePostModal(dispatch);
        }
      }
    } catch (error) {
      setHasVideo(false);
      PostUtils.dispatchNotification('error', 'error', setApiResponse, setLoading, dispatch);
    }
  };

  useEffect(() => {
    PostUtils.positionCursor('editable');
  }, []);

  useEffect(() => {
    if (!loading && apiResponse === 'success') {
      dispatch(closeModal());
    }
    setDisable(postData.post.length <= 0 && !postImage);
  }, [loading, dispatch, apiResponse, postData, postImage]);

  useEffect(() => {
    if (gifUrl) {
      setPostImage(gifUrl);
      setHasVideo(false);
      PostUtils.postInputData(imageInputRef.current, postData, '', setPostData);
    } else if (image) {
      setPostImage(image);
      setHasVideo(false);
      PostUtils.postInputData(imageInputRef.current, postData, '', setPostData);
    } else if (video) {
      setHasVideo(true);
      setPostImage(video);
      PostUtils.postInputData(imageInputRef.current, postData, '', setPostData);
    }
  }, [gifUrl, image, postData, video]);
  return (
    <div className="card card-flush mb-10">
      <div className="card-header justify-content-start align-items-center pt-4">
        {/* Photo */}
        <div className="symbol symbol-45px me-5">
          <img
            src={`${currentUser?.user.profilePicture}`}
            className="rounded-circle"
            style={{ width: "40px", height: "40px", objectFit: "cover" }}
          />
        </div>

        <span className="text-gray-500 fw-semibold fs-6">
          {`${currentUser?.user.username}`}... En que piensas?
        </span>
      </div>

      <div className="card-body pt-2 pb-0" onClick={() => dispatch(openModal({ type: 'add', data: 'test'}))}>
        <AutoResizeTextArea
          className="form-control bg-transparent border-0 px-0"
          placeholder="Escribe algo..."
          rows={1}
          onInput={postInputEditable}
        />
      </div>

      <div className="card-footer d-flex justify-content-end pt-0">


      </div>
    </div>
  );
};

export default PublishCard;
