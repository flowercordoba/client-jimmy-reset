/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect, useState } from 'react';
import { userService } from '../../../../shared/services/user.service';
import { friendRequestService } from '../../../../shared/services/friendRequestService';
import { useAuth } from '../../../modules/auth';
import SolicitudesEnviadas from '../../../modules/friend/components/SolicitudesEnviadas';

interface User {
  _id: string;
  username: string;
  email: string;
  profilePicture: string;
  location: string;
  work: string;
  lastActive: string;
}

interface FriendRequest {
  _id: string;
  senderId: string;
  receiverId: string;
  status: string;
  createdAt: string;
  updatedAt: string;
}

const SideberRFeed: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [friendRequests, setFriendRequests] = useState<FriendRequest[]>([]);
  const [message, setMessage] = useState<string | null>(null);

  const { currentUser } = useAuth();
  // src={`${currentUser?.user.profilePicture}`}
  const userId = `${currentUser?.user._id}`; 

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await userService.getAllUsers(1);
        setUsers(response.data.users);
      } catch (error) {
        console.error('Error obteniendo usuarios:', error);
      }
    };

    const fetchFriendRequests = async () => {
      try {
        const response = await friendRequestService.getFriendRequests();
        setFriendRequests(response);
      } catch (error) {
        console.error('Error fetching friend requests:', error);
      }
    };

    fetchUsers();
    fetchFriendRequests();
  }, []);

  const sendFriendRequest = async (userId: string) => {
    try {
      const response = await friendRequestService.sendFriendRequest(userId);
      console.log('Friend request sent:', response);
      setMessage('Friend request sent successfully!');
      setFriendRequests([...friendRequests, response.friendRequest]);
      setTimeout(() => setMessage(null), 3000); // Clear message after 3 seconds
    } catch (error) {
      console.error('Error sending friend request:', error);
      setMessage('Error sending friend request.');
      setTimeout(() => setMessage(null), 3000); // Clear message after 3 seconds
    }
  };

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

  const filteredUsers = users.filter(user => !friendRequests.some(request => request.receiverId === user._id && request.status === 'pending'));

  return (
    <div
      className="d-lg-flex flex-column flex-lg-row-auto w-lg-325px"
      data-kt-drawer="true"
      data-kt-drawer-name="end-sidebar"
      data-kt-drawer-activate="{default: true, lg: false}"
      data-kt-drawer-overlay="true"
      data-kt-drawer-width="{default:'200px', '250px': '300px'}"
      data-kt-drawer-direction="end"
      data-kt-drawer-toggle="#kt_social_end_sidebar_toggle"
    >
      {message && <div className="alert alert-success">{message}</div>}
      <div className="card mb-5 mb-xl-8">
        <div className="card-header border-0 pt-5">
          <h3 className="card-title align-items-start flex-column">
            <span className="card-label fw-bold text-gray-900">Recomendados</span>
            <span className="text-muted mt-1 fw-semibold fs-7">personas cercanas a ti 80</span>
          </h3>
          <div className="card-toolbar">
            <button
              className="btn btn-icon btn-color-gray-500 btn-active-color-primary justify-content-end"
              data-kt-menu-trigger="click"
              data-kt-menu-placement="bottom-end"
              data-kt-menu-overflow="true"
            >
              <i className="ki-duotone ki-dots-square fs-1">
                <span className="path1"></span>
                <span className="path2"></span>
                <span className="path3"></span>
                <span className="path4"></span>
              </i>
            </button>
          </div>
        </div>
        <div className="card-body pt-5">
          {filteredUsers.map(user => (
            <React.Fragment key={user._id}>
              <div className="d-flex flex-stack">
                <div className="symbol symbol-40px me-5 position-relative">
                  <img src={user.profilePicture} className="rounded-circle" alt={user.username}
                     style={{ width: "40px", height: "40px", objectFit: "cover" }} />
                  <span
                    className="position-absolute bottom-0 end-0 translate-middle p-1 bg-success border border-light rounded-circle"
                    style={{ width: "10px", height: "10px" }}
                  ></span>
                </div>
                <div className="d-flex align-items-center flex-row-fluid flex-wrap">
                  <div className="flex-grow-1 me-2">
                    <a href={`pages/user-profile/overview.html?id=${user._id}`} className="text-gray-800 text-hover-primary fs-6 fw-bold">
                      {user.username}
                    </a>
                    <span className="text-muted fw-semibold d-block fs-7">{user.work}</span>
                  </div>
                  <button onClick={() => sendFriendRequest(user._id)} className="btn btn-sm btn-light fs-8 fw-bold">Enviar</button>
                </div>
              </div>
              <div className="separator separator-dashed my-4"></div>
            </React.Fragment>
          ))}
        </div>
      </div>
      <SolicitudesEnviadas />

    </div>
  );
};

export default SideberRFeed;
