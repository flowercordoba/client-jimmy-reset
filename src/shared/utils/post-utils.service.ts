/* eslint-disable @typescript-eslint/no-explicit-any */

import { cloneDeep, find, findIndex, List, remove } from 'lodash';
import { closeModal } from '../reducers/modal/modal.reducer';
import { clearPost, updatePostItem } from '../reducers/post/post.reducer';
import { postService } from '../services/post.service';
import { Utils } from './utils.service';
import { ThunkDispatch, AnyAction } from '@reduxjs/toolkit';

export class PostUtils {
  static selectBackground(bgColor: any, postData: { bgColor: any; }, setTextAreaBackground: (arg0: any) => void, setPostData: (arg0: any) => void) {
    postData.bgColor = bgColor;
    setTextAreaBackground(bgColor);
    setPostData(postData);
  }

  static postInputEditable(textContent: any, postData: { post: any; }, setPostData: (arg0: any) => void) {
    postData.post = textContent;
    setPostData(postData);
  }

  static closePostModal(dispatch: (arg0: { payload: undefined; type: "modal/closeModal" | "post/clearPost"; }) => void) {
    dispatch(closeModal());
    dispatch(clearPost());
  }

  static clearImage(postData: { gifUrl: string; image: string; video: string; post: any; }, post: any, inputRef: { current: { textContent: any; }; }, dispatch: (arg0: { payload: any; type: "post/updatePostItem"; }) => void, setSelectedPostImage: (arg0: null) => void, setPostImage: (arg0: string) => void, setPostData: (arg0: any) => void) {
    postData.gifUrl = '';
    postData.image = '';
    postData.video = '';
    setSelectedPostImage(null);
    setPostImage('');
    setTimeout(() => {
      if (inputRef?.current) {
        inputRef.current.textContent = !post ? postData?.post : post;
        if (post) {
          postData.post = post;
        }
        setPostData(postData);
      }
      PostUtils.positionCursor('editable');
    });
    dispatch(
      updatePostItem({ gifUrl: '', image: '', imgId: '', imgVersion: '', video: '', videoId: '', videoVersion: '' })
    );
  }

  static postInputData(imageInputRef: { current: { textContent: any; }; }, postData: { post: any; }, post: any, setPostData: (arg0: any) => void) {
    setTimeout(() => {
      if (imageInputRef?.current) {
        imageInputRef.current.textContent = !post ? postData?.post : post;
        if (post) {
          postData.post = post;
        }
        setPostData(postData);
        PostUtils.positionCursor('editable');
      }
    });
  }

  static dispatchNotification(message: any, type: string, setApiResponse: (arg0: any) => void, setLoading: (arg0: boolean) => void, dispatch: ThunkDispatch<unknown, unknown, AnyAction>) {
    setApiResponse(type);
    setLoading(false);
    Utils.dispatchNotification(message, type, dispatch);
  }

  static async sendPostWithFileRequest(type: string, postData: { post: any; }, imageInputRef: { current: { textContent: any; }; }, setApiResponse: (arg0: string) => void, setLoading: (arg0: boolean) => void, dispatch: any) {
    try {
      if (imageInputRef?.current) {
        imageInputRef.current.textContent = postData.post;
      }
      const response =
        type === 'image'
          ? await postService.createPostWithImage(postData)
          : await postService.createPostWithVideo(postData);
      if (response) {
        setApiResponse('success');
        setLoading(false);
      }
    } catch (error: any) {
      PostUtils.dispatchNotification(error.response?.data?.message || 'An error occurred', 'error', setApiResponse, setLoading, dispatch);
    }
}

  static async sendUpdatePostWithFileRequest(type: string, postId: any, postData: any, setApiResponse: (arg0: string) => void, setLoading: (arg0: boolean) => void, dispatch: any) {
    try {
      const response =
        type === 'image'
          ? await postService.updatePostWithImage(postId, postData)
          : await postService.updatePostWithVideo(postId, postData);
      if (response) {
        PostUtils.dispatchNotification(response.data.message, 'success', setApiResponse, setLoading, dispatch);
        setTimeout(() => {
          setApiResponse('success');
          setLoading(false);
        }, 3000);
        PostUtils.closePostModal(dispatch);
      }
    } catch (error) {
      PostUtils.dispatchNotification(error.response.data.message, 'error', setApiResponse, setLoading, dispatch);
    }
  }

  static async sendUpdatePostRequest(postId: any, postData: any, setApiResponse: (arg0: string) => void, setLoading: (arg0: boolean) => void, dispatch: any) {
    const response = await postService.updatePost(postId, postData);
    if (response) {
      PostUtils.dispatchNotification(response.data.message, 'success', setApiResponse, setLoading, dispatch);
      setTimeout(() => {
        setApiResponse('success');
        setLoading(false);
      }, 3000);
      PostUtils.closePostModal(dispatch);
    }
  }

  static checkPrivacy(post: { privacy: string; userId: any; }, profile: { _id: any; }, following: any) {
    const isPrivate = post?.privacy === 'Private' && post?.userId === profile?._id;
    const isPublic = post?.privacy === 'Public';
    const isFollower =
      post?.privacy === 'Followers' && Utils.checkIfUserIsFollowed(following, post?.userId, profile?._id);
    return isPrivate || isPublic || isFollower;
  }

  // static positionCursor(elementId: string) {
  //   const element = document.getElementById(`${elementId}`);
  //   const selection = window.getSelection();
  //   const range = document.createRange();
  //   selection.removeAllRanges();
  //   range.selectNodeContents(element);
  //   range.collapse(false);
  //   selection.addRange(range);
  //   element.focus();
  // }

  static socketIOPost(posts: any[] | List<unknown> | null | undefined, setPosts: (arg0: any) => void) {
    posts = cloneDeep(posts);
    socketService?.socket?.on('add post', (post: any) => {
      posts = [post, ...posts];
      setPosts(posts);
    });

    socketService?.socket?.on('update post', (post: any) => {
      PostUtils.updateSinglePost(posts, post, setPosts);
    });

    socketService?.socket?.on('delete post', (postId: any) => {
      const index = findIndex(posts, (postData) => postData._id === postId);
      if (index > -1) {
        posts = cloneDeep(posts);
        remove(posts, { _id: postId });
        setPosts(posts);
      }
    });

    socketService?.socket?.on('update like', (reactionData: { postId: any; postReactions: any; }) => {
      const postData = find(posts, (post) => post._id === reactionData?.postId);
      if (postData) {
        postData.reactions = reactionData.postReactions;
        PostUtils.updateSinglePost(posts, postData, setPosts);
      }
    });

    socketService?.socket?.on('update comment', (commentData: { postId: any; commentsCount: any; }) => {
      const postData = find(posts, (post) => post._id === commentData?.postId);
      if (postData) {
        postData.commentsCount = commentData.commentsCount;
        PostUtils.updateSinglePost(posts, postData, setPosts);
      }
    });
  }

  static updateSinglePost(posts: any[] | List<[string, any]> | null | undefined, post: { _id: any | string; }, setPosts: (arg0: any) => void) {
    posts = cloneDeep(posts);
    const index = findIndex(posts, ['_id', post?._id]);
    if (index > -1) {
      posts.splice(index, 1, post);
      setPosts(posts);
    }
  }
}
