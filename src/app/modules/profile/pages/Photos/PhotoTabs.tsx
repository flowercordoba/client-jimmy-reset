import React, { FC } from 'react';

const PhotoTabs: FC = () => {
  return (
    <div className='mb-3'>
      <nav>
        <div className='nav nav-tabs'>
          <button className='nav-link active'>Fotos en las que apareces</button>
          <button className='nav-link'>Tus fotos</button>
          <button className='nav-link'>Álbumes</button>
        </div>
      </nav>
    </div>
  );
};

export default PhotoTabs;
