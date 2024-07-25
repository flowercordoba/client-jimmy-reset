import React from 'react';
import FriendListHeader from './FriendListHeader';
import FriendTabs from './FriendTabs';
import FriendList from './FriendList';

const FriendPages = () => {
  return (
    <div className='container'>
      <FriendListHeader />
      <FriendTabs />
      <FriendList />
    </div>
  );
};

export default FriendPages;
