import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createBlog, createBlogWithImage } from '../actions/blogActions';

const CreateBlog = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [tags, setTags] = useState('');
  const [image, setImage] = useState<File | null>(null);
  const dispatch = useDispatch();

  const handleCreateBlog = () => {
    const blogData = { title, content, tags: tags.split(',') };
    if (image) {
      const reader = new FileReader();
      reader.readAsDataURL(image);
      reader.onload = () => {
        const imageData = reader.result;
        dispatch(createBlogWithImage({ ...blogData, image: imageData }));
      };
    } else {
      dispatch(createBlog(blogData));
    }
  };

  return (
    <div>
      <h2>Create Blog</h2>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        placeholder="Content"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <input
        type="text"
        placeholder="Tags (comma separated)"
        value={tags}
        onChange={(e) => setTags(e.target.value)}
      />
      <input
        type="file"
        onChange={(e) => setImage(e.target.files ? e.target.files[0] : null)}
      />
      <button onClick={handleCreateBlog}>Create Blog</button>
    </div>
  );
};

export default CreateBlog;
