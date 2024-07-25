import React, { FC } from 'react';

const Friends: FC = () => {
  const friends = [
    { name: 'Edinson Palacios', img: 'https://images.unsplash.com/photo-1721222618631-e6c540963597?q=80&w=1771&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { name: 'Ruben Monsalve', img: 'https://images.unsplash.com/photo-1721222618631-e6c540963597?q=80&w=1771&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { name: 'Nilo Segundo', img: 'https://images.unsplash.com/photo-1721222618631-e6c540963597?q=80&w=1771&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    // Añade más amigos según sea necesario
  ];

  return (
    <div className=' mb-3'>
      <div className='card-body'>
        <div className='d-flex justify-content-between mb-3'>
          <h5 className='card-title'>Amigos</h5>
          <a href='#' className='btn btn-link'>Ver todos los amigos</a>
        </div>
        <div className='d-flex flex-wrap'>
          {friends.map((friend, index) => (
            <div key={index} className='p-1' style={{ flex: '0 1 calc(33.333% - 1rem)' }}>
              <img src={friend.img} alt={friend.name} className='img-fluid rounded' />
              <p className='text-center mt-2'>{friend.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Friends;
