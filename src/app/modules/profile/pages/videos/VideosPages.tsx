import React from 'react';
import VideoTabs from './VideoTabs';
import VideoGrid from './VideoGrid';

const VideosPages = () => {
  return (
    <div className='container'>
      <div className='d-flex justify-content-between mb-3'>
        <h5 className='card-title'>Videos</h5>
        <button className='btn btn-link'>Agregar fotos/video</button>
      </div>
      <VideoTabs />
      <VideoGrid />
    </div>
  );
};

export default VideosPages;
