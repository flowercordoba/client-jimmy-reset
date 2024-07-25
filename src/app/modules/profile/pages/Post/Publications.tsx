import React, { FC, useState } from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
// import { PublicationsList, PublicationsGrid } from './PublicationsList';

const Publications: FC = () => {
  const [view, setView] = useState<'list' | 'grid'>('list');
  // const publications = [
  //   {
  //     author: 'Flower Moreno',
  //     date: '23 de junio a la 1:22 p.m.',
  //     content: 'Contenido de la publicación...',
  //     image: 'ruta_de_video.mp4', // Cambia a la ruta de tu video o imagen
  //     type: 'video' // Cambia a 'image' si es una imagen
  //   },
  //   // Añade más publicaciones según sea necesario
  // ];

  return (
    <div className='card'>
      <div className='card-body'>
        <div className='d-flex justify-content-between mb-3'>
          <h5 className='card-title'>Publicaciones</h5>
          <div>
            <button className='btn btn-light me-2'>
              <i className='fas fa-filter me-1'></i>
              Filtros
            </button>
            <button className='btn btn-light'>
              <i className='fas fa-cog me-1'></i>
              Administrar publicaciones
            </button>
          </div>
        </div>
        <div className='d-flex mb-3'>
          <button
            className={`btn btn-link ${view === 'list' ? 'active' : ''}`}
            onClick={() => setView('list')}
          >
            <i className='fas fa-list me-1'></i>
            Vista de lista
          </button>
          <button
            className={`btn btn-link ${view === 'grid' ? 'active' : ''}`}
            onClick={() => setView('grid')}
          >
            <i className='fas fa-th me-1'></i>
            Vista de cuadrícula
          </button>
        </div>
        <hr />
        {/* {view === 'list' ? (
          <PublicationsList publications={publications} />
        ) : (
          <PublicationsGrid publications={publications} />
        )} */}
      </div>
    </div>
  );
};

export default Publications;
