import React, { useEffect, useState } from 'react';
import { friendRequestService } from '../../../../shared/services/friendRequestService';

interface FriendRequest {
  _id: string;
  receiverId: {
    _id: string;
    username: string;
    profilePicture: string;
  };
  status: string;
  createdAt: string;
  updatedAt: string;
}

const SolicitudesEnviadas: React.FC = () => {

  const [friendRequests, setFriendRequests] = useState<FriendRequest[]>([]);
  const [message, setMessage] = useState<string | null>(null);
  console.log('friendRequests',friendRequests)

  useEffect(() => {
    const fetchFriendRequests = async () => {
      try {
        const response = await friendRequestService.getFriendRequests();
        setFriendRequests(response);
      } catch (error) {
        console.error('Error fetching friend requests:', error);
        setMessage('Error fetching friend requests.');
        setTimeout(() => setMessage(null), 3000); // Clear message after 3 seconds
      }
    };

    fetchFriendRequests();
  }, []);

  const cancelFriendRequest = async (requestId: string) => {
    try {
      await friendRequestService.cancelFriendRequest(requestId);
      setFriendRequests(friendRequests.filter(request => request._id !== requestId));
      setMessage('Friend request cancelled.');
      setTimeout(() => setMessage(null), 3000); // Clear message after 3 seconds
    } catch (error) {
      console.error('Error cancelling friend request:', error);
      setMessage('Error cancelling friend request.');
      setTimeout(() => setMessage(null), 3000); // Clear message after 3 seconds
    }
  };

  return (
    <div className="card mb-5 mb-xl-8">
      <div className="card-header border-0 pt-5">
        <h3 className="card-title align-items-start flex-column">
          <span className="card-label fw-bold text-gray-900">Solicitudes Enviadas</span>
        </h3>
      </div>
      <div className="card-body pt-5">
        {message && <div className="alert alert-success">{message}</div>}
        {friendRequests.map(request => (
          <div key={request._id} className="d-flex flex-stack">
            <div className="symbol symbol-40px me-5 position-relative">
              <img src={request.receiverId?.profilePicture} className="rounded-circle" alt={request.receiverId?.username}
                style={{ width: "40px", height: "40px", objectFit: "cover" }} />
            </div>
            <div className="d-flex align-items-center flex-row-fluid flex-wrap">
              <div className="flex-grow-1 me-2">
                <span className="text-gray-800 text-hover-primary fs-6 fw-bold">{request.receiverId?.username}</span>
              </div>
              <button onClick={() => cancelFriendRequest(request._id)} className="btn btn-sm btn-light fs-8 fw-bold">Cancelar</button>
            </div>
            <div className="separator separator-dashed my-4"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SolicitudesEnviadas;
