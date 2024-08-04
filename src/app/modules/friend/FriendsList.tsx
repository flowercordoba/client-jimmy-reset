import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectFriends } from '../../../store/selectors/friendsSelectors';
import { setFriends } from './slices/friendsSlice';

const FriendsList: React.FC = () => {
  const dispatch = useDispatch();
  const friends = useSelector(selectFriends);

  useEffect(() => {
    // Aquí deberías realizar la llamada a la API para obtener la lista de amigos
    const fetchFriends = async () => {
      const response = await fetch('/api/friends'); // Reemplaza con tu llamada a la API real
      const friendsData: Friend[] = await response.json();
      dispatch(setFriends(friendsData));
    };

    fetchFriends();
  }, [dispatch]);

  return (
    <div>
      <h2>Amigos</h2>
      <ul>
        {friends.map(friend => (
          <li key={friend.id}>
            <img src={friend.profilePicture} alt={friend.name} />
            <span>{friend.name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FriendsList;
