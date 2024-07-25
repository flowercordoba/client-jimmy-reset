import React, { FC } from 'react';

const FriendListHeader: FC = () => {
  return (
    <div className='d-flex align-items-center mb-3'>
      <img
        src='https://images.unsplash.com/photo-1721222618631-e6c540963597?q=80&w=1771&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        alt='Perfil'
        className='rounded-circle me-3'
        style={{ width: '50px', height: '50px' }}
      />
      <h5>Flower Moreno</h5>
    </div>
  );
};

export default FriendListHeader;
