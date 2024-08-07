import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectStories, selectStoriesLoading, selectStoriesError } from '../../../store/selectors/storySelectors';
import { fetchStories } from './actions/storyActions';

const HistoriePages: React.FC = () => {
  const dispatch = useDispatch();
  const stories = useSelector(selectStories);
  const loading = useSelector(selectStoriesLoading);
  const error = useSelector(selectStoriesError);

  useEffect(() => {
    dispatch(fetchStories(1)); // Fetch first page of stories
  }, [dispatch]);

  useEffect(() => {
    console.log('Stories:', stories);
  }, [stories]);

  // Verificar que todos los IDs sean únicos
  useEffect(() => {
    const ids = stories.map(story => story._id);
    console.log('Story IDs:', ids);
    const uniqueIds = new Set(ids);
    if (uniqueIds.size !== ids.length) {
      console.error('Duplicate IDs found:', ids);
    }
  }, [stories]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!Array.isArray(stories)) {
    return <div>No stories found</div>;
  }

  return (
    <div>
      <h1>HistoriePages</h1>
      <ul>
        {stories.map((story) => (
          // Usando la propiedad `_id` única de cada `story` como `key`
          <li key={story._id}>{story.content}</li>
        ))}
      </ul>
    </div>
  );
};

export default HistoriePages;
