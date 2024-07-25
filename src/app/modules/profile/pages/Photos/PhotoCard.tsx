import React, { FC } from 'react';

interface PhotoCardProps {
  img: string;
}

const PhotoCard: FC<PhotoCardProps> = ({ img }) => {
  return (
    <div className='p-1' style={{ flex: '0 1 calc(33.333% - 1rem)' }}>
      <div className='position-relative'>
        <img src={img} alt='Foto' className='img-fluid rounded' />
        <button className='btn btn-sm btn-light position-absolute top-0 end-0 m-2'>
          <i className='fas fa-pen'></i>
        </button>
      </div>
    </div>
  );
};

export default PhotoCard;
