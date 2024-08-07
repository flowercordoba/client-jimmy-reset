import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectBlogs, selectBlogLoading, selectBlogError } from '../../../../../store/selectors/blogSelectors';
import { fetchBlogs } from '../actions/blogActions';



const BlogList = () => {
  const dispatch = useDispatch();
  const blogs = useSelector(selectBlogs);
  const loading = useSelector(selectBlogLoading);
  const error = useSelector(selectBlogError);

  useEffect(() => {


    dispatch(fetchBlogs(1)); 
  }, [dispatch]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <h2>Blog List</h2>
      <ul>
        {blogs.map((blog) => (
          <li key={blog.id}>
            <h3>{blog.title}</h3>
            <p>{blog.content}</p>
            {blog.imgId && <img src={`https://res.cloudinary.com/dzqpacupf/image/upload/v${blog.imgVersion}/${blog.imgId}`} alt={blog.title} />}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BlogList;
