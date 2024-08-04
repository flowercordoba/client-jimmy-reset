import React from 'react';
import { useAuth } from '../../../modules/auth';

const SidebarFeed: React.FC = () => {
  const { currentUser } = useAuth();
  // src={`${currentUser?.user.profilePicture}`}

  return (
    <div className="d-lg-flex flex-column flex-lg-row-auto w-lg-325px" 
         data-kt-drawer="true" 
         data-kt-drawer-name="start-sidebar" 
         data-kt-drawer-activate="{default: true, lg: false}" 
         data-kt-drawer-overlay="true" 
         data-kt-drawer-width="{default:'200px', '250px': '300px'}" 
         data-kt-drawer-direction="start" 
         data-kt-drawer-toggle="#kt_social_start_sidebar_toggle">
      {/* User menu */}
      <div className="card mb-5 mb-xl-8">
        <div className="card-body pt-15 px-0">
          <div className="d-flex flex-column text-center mb-9 px-9">
            <div className="symbol symbol-80px symbol-lg-150px mb-4">
              <img src={`${currentUser?.user.profilePicture}`} alt="" 
                   className="rounded-circle"
                   style={{ width: "100px", height: "100px", objectFit: "cover" }}
                   />
              
            </div>
            <div className="text-center">
              <a  className="text-gray-800 fw-bold text-hover-primary fs-4">{`${currentUser?.user.username}`}</a>
              <span className="text-muted d-block fw-semibold">{`${currentUser?.user.email}`}</span>
            </div>
          </div>
          <div className="row px-9 mb-4">
            <div className="col-md-4 text-center">
              <div className="text-gray-800 fw-bold fs-3">
                <span className="m-0" data-kt-countup="true" data-kt-countup-value="642">{currentUser?.user.postsCount}</span>
              </div>
              <span className="text-gray-500 fs-8 d-block fw-bold">Publicaciones</span>
            </div>
            <div className="col-md-4 text-center">
              <div className="text-gray-800 fw-bold fs-3">
                <span className="m-0" data-kt-countup="true" data-kt-countup-value="24">{currentUser?.user.followersCount}</span>
              </div>
              <span className="text-gray-500 fs-8 d-block fw-bold">Seguidores</span>
            </div>
            <div className="col-md-4 text-center">
              <div className="text-gray-800 fw-bold fs-3">
                <span className="m-0" data-kt-countup="true" data-kt-countup-value="12">{currentUser?.user.followingCount}</span>
              </div>
              <span className="text-gray-500 fs-8 d-block fw-bold">Siguiendo</span>
            </div>
          </div>
          {/* <div className="m-0">
            <ul className="nav nav-pills nav-pills-custom flex-column border-transparent fs-5 fw-bold">
              <li className="nav-item mt-5">
                <a className="nav-link text-muted text-active-primary ms-0 py-0 me-10 ps-9 border-0 active" href="pages/social/feeds.html">
                  <i className="ki-duotone ki-row-horizontal fs-3 text-muted me-3">
                    <span className="path1"></span>
                    <span className="path2"></span>
                  </i>
                  Feeds 
                  <span className="bullet-custom position-absolute start-0 top-0 w-3px h-100 bg-primary rounded-end"></span>
                </a>
              </li>
              <li className="nav-item mt-5">
                <a className="nav-link text-muted text-active-primary ms-0 py-0 me-10 ps-9 border-0" href="pages/social/activity.html">
                  <i className="ki-duotone ki-chart-simple-2 fs-3 text-muted me-3">
                    <span className="path1"></span>
                    <span className="path2"></span>
                    <span className="path3"></span>
                    <span className="path4"></span>
                  </i>
                  Activity 
                  <span className="bullet-custom position-absolute start-0 top-0 w-3px h-100 bg-primary rounded-end"></span>
                </a>
              </li>
              <li className="nav-item mt-5">
                <a className="nav-link text-muted text-active-primary ms-0 py-0 me-10 ps-9 border-0" href="pages/social/followers.html">
                  <i className="ki-duotone ki-profile-circle fs-3 text-muted me-3">
                    <span className="path1"></span>
                    <span className="path2"></span>
                    <span className="path3"></span>
                  </i>
                  Followers 
                  <span className="bullet-custom position-absolute start-0 top-0 w-3px h-100 bg-primary rounded-end"></span>
                </a>
              </li>
              <li className="nav-item mt-5">
                <a className="nav-link text-muted text-active-primary ms-0 py-0 me-10 ps-9 border-0" href="pages/social/settings.html">
                  <i className="ki-duotone ki-setting-2 fs-3 text-muted me-3">
                    <span className="path1"></span>
                    <span className="path2"></span>
                  </i>
                  Settings 
                  <span className="bullet-custom position-absolute start-0 top-0 w-3px h-100 bg-primary rounded-end"></span>
                </a>
              </li>
            </ul>
          </div> */}
        </div>
      </div>
   
    </div>
  );
}

export default SidebarFeed;
