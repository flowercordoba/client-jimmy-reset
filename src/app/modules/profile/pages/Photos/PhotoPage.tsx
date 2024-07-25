import React from 'react';
import PhotoTabs from './PhotoTabs';
import PhotoGrid from './PhotoGrid';

const PhotoPage = () => {
  return (
    <div className='container'>
      <div className='d-flex justify-content-between mb-3'>
        <h5 className='card-title'>Fotos</h5>
        <button className='btn btn-link'>Agregar fotos/video</button>
      </div>
      <PhotoTabs />
      <PhotoGrid />
    </div>
  );
};

export default PhotoPage;
