import React, { useEffect, useState } from 'react';
import { userService } from '../../../../shared/services/user.service';

interface User {
  _id: string;
  username: string;
  email: string;
  profilePicture: string;
  location: string;
  work: string;
  lastActive: string;
}

const SideberRFeed: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await userService.getAllUsers(1);
        setUsers(response.data.users);
      } catch (error) {
        console.error('Error obteniendo usuarios:', error);
      }
    };

    fetchUsers();
  }, []);

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
      {/* Social widget 1 */}
      <div className="card mb-5 mb-xl-8">
        {/* Header */}
        <div className="card-header border-0 pt-5">
          <h3 className="card-title align-items-start flex-column">
            <span className="card-label fw-bold text-gray-900">Recomendados</span>
            <span className="text-muted mt-1 fw-semibold fs-7">personas cercanas a ti 80</span>
          </h3>
          {/* Toolbar */}
          <div className="card-toolbar">
            {/* Menu */}
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
          {/* End Toolbar */}
        </div>
        {/* End Header */}
        {/* Body */}
        <div className="card-body pt-5">
          {users.map(user => (
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
                  <a href={`pages/user-profile/overview.html?id=${user._id}`} className="btn btn-sm btn-light fs-8 fw-bold">Enviar</a>
                </div>
              </div>
              <div className="separator separator-dashed my-4"></div>
            </React.Fragment>
          ))}
        </div>
        {/* End Body */}
      </div>
    </div>
  );
};

export default SideberRFeed;
