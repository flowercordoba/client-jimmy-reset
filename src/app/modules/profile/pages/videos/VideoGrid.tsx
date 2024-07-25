import React, { FC } from 'react';
import VideoCard from './VideoCard';

const VideoGrid: FC = () => {
  const videos = [
    { videoUrl: 'https://www.youtube.com/embed/ikma1vpafmc' },
    { videoUrl: 'https://www.youtube.com/embed/DQpuCRF0suo' },
    { videoUrl: 'https://www.youtube.com/embed/lTRiuFIWV54' },
    { videoUrl: 'https://www.youtube.com/embed/2Vv-BfVoq4g' },
    { videoUrl: 'https://www.youtube.com/embed/JGwWNGJdvx8' },
    // Añadir más videos según sea necesario
  ];

  return (
    <div className='row'>
      {videos.map((video, index) => (
        <VideoCard key={index} videoUrl={video.videoUrl} />
      ))}
    </div>
  );
};

export default VideoGrid;
