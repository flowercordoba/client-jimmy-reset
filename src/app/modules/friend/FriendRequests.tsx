// import React, { useEffect } from 'react';
// import { useSelector, useDispatch } from 'react-redux';

// const FriendRequests: React.FC = () => {
//   const dispatch = useDispatch();
//   const friendRequests = useSelector(selectFriendRequests);
//   const loading = useSelector(selectFriendRequestLoading);
//   const error = useSelector(selectFriendRequestError);

//   useEffect(() => {
//     dispatch(fetchFriendRequests());
//   }, [dispatch]);

//   const handleSendRequest = (fromUser: string, toUser: string) => {
//     dispatch(sendFriendRequest({ fromUser, toUser }));
//   };

//   const handleAcceptRequest = (id: string) => {
//     dispatch(acceptFriendRequest(id));
//   };

//   const handleRejectRequest = (id: string) => {
//     dispatch(rejectFriendRequest(id));
//   };

//   if (loading) return <div>Loading...</div>;
//   if (error) return <div>Error: {error}</div>;

//   return (
//     <div>
//       <h3>Solicitudes de Amistad</h3>
//       <ul>
//         {friendRequests.map(request => (
//           <li key={request.id}>
//             {request.fromUser} a {request.toUser} - {request.status}
//             {request.status === 'pending' && (
//               <>
//                 <button onClick={() => handleAcceptRequest(request.id)}>Aceptar</button>
//                 <button onClick={() => handleRejectRequest(request.id)}>Rechazar</button>
//               </>
//             )}
//           </li>
//         ))}
//       </ul>
//       <button onClick={() => handleSendRequest('Miguel', 'Ana')}>Enviar solicitud a Ana</button>
//     </div>
//   );
// };

// export default FriendRequests;
