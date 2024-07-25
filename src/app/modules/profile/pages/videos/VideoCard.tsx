import React, { FC } from 'react';

interface VideoCardProps {
  videoUrl: string;
}

const VideoCard: FC<VideoCardProps> = ({ videoUrl }) => {
  return (
    <div className='col-12 col-md-6 col-lg-4 mb-3'>
      <div className='embed-responsive embed-responsive-16by9'>
        <iframe
          className='embed-responsive-item'
          src={videoUrl}
          allowFullScreen
          title='YouTube video player'
        ></iframe>
      </div>
    </div>
  );
};

export default VideoCard;
