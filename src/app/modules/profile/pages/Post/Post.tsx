import React, { FC } from 'react';

const Posts: FC = () => {
  return (
    <div className='card mb-5'>
      <div className='card-body'>
        <div className='d-flex mb-3'>
          <img
            src='https://images.unsplash.com/photo-1721222618631-e6c540963597?q=80&w=1771&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
            alt='Perfil'
            className='rounded-circle me-3'
            style={{ width: '40px', height: '40px' }}
          />
          <input
            type='text'
            className='form-control rounded-pill'
            placeholder='¿Qué estás pensando?'
            style={{ backgroundColor: '#f0f2f5', border: 'none' }}
          />
        </div>
        <hr />
        <div className='d-flex justify-content-around'>
          <button className='btn btn-link text-decoration-none'>
            <i className='fas fa-video me-1 text-danger'></i>
            Video en vivo
          </button>
          <button className='btn btn-link text-decoration-none'>
            <i className='fas fa-photo-video me-1 text-success'></i>
            Foto/video
          </button>
          <button className='btn btn-link text-decoration-none'>
            <i className='fas fa-flag me-1 text-primary'></i>
            Acontecimiento importante
          </button>
        </div>
      </div>
    </div>
  );
};

export default Posts;
