import React, { FC } from 'react';
// import FriendCard from './FriendCard';
import { Connections } from '../../components/Connections';

const FriendList: FC = () => {
  // const friends = [
  //   { name: 'Danii Perea Marino', mutualFriends: 7, img: 'https://images.unsplash.com/photo-1721385675060-9982ec72385e?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
  //   { name: 'Deyson Moreno', mutualFriends: 7, img: 'https://images.unsplash.com/photo-1721375443466-bc23f9eac857?q=80&w=1771&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
  //   { name: 'Nilo Segundo', mutualFriends: 18, img: 'https://images.unsplash.com/photo-1719937206667-ac87c15ad3e9?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },

  // ];

  return (
    <div>
      <Connections />
      {/* {friends.map((friend, index) => (
        <FriendCard
          key={index}
          name={friend.name}
          mutualFriends={friend.mutualFriends}
          img={friend.img}
        />
      ))} */}
    </div>
  );
};

export default FriendList;
