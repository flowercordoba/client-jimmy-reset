import React, { FC } from 'react';
import Friends from '../Friends/Friends';
import Photos from '../Photos/Photos';

const PersonalDetails: FC = () => {
  return (
    <div className='card mb-5'>
      <div className='card-body'>
        <h5 className='card-title'>Sobre mi</h5>
        <p className='card-text'>soy virgo</p>
        <button className='btn btn-secondary mb-3'>Editar</button>
        <ul className='list-group list-group-flush'>
          <li className='list-group-item'>Estudió Pregrado en Ingeniería de Sistemas e Informática en UNIR - La Universidad Internacional de La Rioja en Colombia</li>
          <li className='list-group-item'>Estudió Máster Desarrollo Web Full Stack + MultiCloud en UNIR - La Universidad Internacional de La Rioja en Colombia</li>
          <li className='list-group-item'>Estudió en Universidad del Area Andina</li>
        </ul>
        <button className='btn btn-secondary mt-3'>Editar detalles</button>
      </div>
      <Photos />
      <Friends />
    </div>
  );
};

export default PersonalDetails;
