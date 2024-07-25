import React, { FC } from 'react';
import PhotoCard from './PhotoCard';

const PhotoGrid: FC = () => {
  const photos = [
    'https://images.unsplash.com/photo-1721297014355-bea6467bb1c9?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1721297014355-bea6467bb1c9?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1721297014355-bea6467bb1c9?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',

  ];

  return (
    <div className='d-flex flex-wrap'>
      {photos.map((photo, index) => (
        <PhotoCard key={index} img={photo} />
      ))}
    </div>
  );
};

export default PhotoGrid;
