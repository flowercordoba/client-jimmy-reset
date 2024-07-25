import React, { FC } from 'react';

interface PublicationProps {
  author: string;
  date: string;
  content: string;
  image: string;
  type: 'video' | 'image' | 'text';
}

const Publication: FC<PublicationProps> = ({ author, date, content, image, type }) => {
  return (
    <div className='card mb-4'>
      <div className='card-body'>
        <div className='d-flex'>
          <img
            src='ruta_de_tu_imagen_perfil.png'
            alt='Perfil'
            className='rounded-circle me-3'
            style={{ width: '40px', height: '40px' }}
          />
          <div>
            <h6>{author}</h6>
            <p>{date}</p>
          </div>
        </div>
        <p>{content}</p>
        {type === 'video' ? (
          <video className='img-fluid' controls>
            <source src={image} type='video/mp4' />
            Your browser does not support the video tag.
          </video>
        ) : (
          <img src={image} alt='Publicación' className='img-fluid' />
        )}
      </div>
    </div>
  );
};

export default Publication;
