import React, { FC } from 'react';

const Photos: FC = () => {
  return (
    <div className=' mb-5'>
      <div className='card-body'>
        <div className='d-flex justify-content-between mb-3'>
          <h5 className='card-title'>Fotos</h5>
          <a href='#' className='btn btn-link'>Ver todas las fotos</a>
        </div>
        <div className='d-flex flex-wrap'>
          {/* Aquí se deben reemplazar los src con las rutas de las fotos */}
          {[
            'https://images.unsplash.com/photo-1721222618631-e6c540963597?q=80&w=1771&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            'https://images.unsplash.com/photo-1721222618631-e6c540963597?q=80&w=1771&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            'https://images.unsplash.com/photo-1721222618631-e6c540963597?q=80&w=1771&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'

          ].map((foto, index) => (
            <div key={index} className='p-1' style={{ flex: '0 1 calc(33.333% - 1rem)' }}>
              <img src={foto} alt='Foto' className='img-fluid' />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Photos;
