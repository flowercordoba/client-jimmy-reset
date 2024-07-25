import React, { FC } from 'react';

interface FriendCardProps {
  name: string;
  mutualFriends: number;
  img: string;
}

const FriendCard: FC<FriendCardProps> = ({ name, mutualFriends, img }) => {
  return (
    <div className='card mb-3'>
      <div className='d-flex align-items-center p-3'>
        <img
          src={img}
          alt={name}
          className='rounded-circle me-3'
          style={{ width: '50px', height: '50px' }}
        />
        <div>
          <h6 className='mb-0'>{name}</h6>
          <p className='mb-0 text-muted'>{mutualFriends} amigos en común</p>
        </div>
        <div className='ms-auto'>
          <button className='btn btn-link'>
            <i className='fas fa-ellipsis-h'></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default FriendCard;
