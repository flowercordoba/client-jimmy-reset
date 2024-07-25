import React, { FC } from 'react';

const FriendTabs: FC = () => {
  return (
    <div className='mb-3'>
      <nav>
        <div className='nav nav-tabs'>
          <button className='nav-link active'>Todos los amigos</button>
          <button className='nav-link'>Agregados recientemente</button>
          <button className='nav-link'>Ciudad actual</button>
          <button className='nav-link'>Ciudad de origen</button>
          <button className='nav-link'>Seguidores</button>
          <button className='nav-link'>Seguidos</button>
        </div>
      </nav>
    </div>
  );
};

export default FriendTabs;
