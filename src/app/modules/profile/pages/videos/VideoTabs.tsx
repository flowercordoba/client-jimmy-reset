import React, { FC } from 'react';

const VideoTabs: FC = () => {
  return (
    <div className='mb-3'>
      <nav>
        <div className='nav nav-tabs'>
          <button className='nav-link active'>Tus videos</button>
        </div>
      </nav>
    </div>
  );
};

export default VideoTabs;
