import { FC } from "react";
import { Link, useLocation } from "react-router-dom";
import { Content } from "../../../features/layout/components/content";
import { useAuth } from "../auth";
import ProfileImage from "./pages/accounts/ProfileImage";

const ProfileHeader: FC = () => {
  const location = useLocation();
  const { currentUser } = useAuth();

  return (
    <>
      <Content>
        <div className="card mb-5 mb-xl-10">
          <div className="card-body pt-9 pb-0">
            <div className="rounded w-100 mb-7" style={{ position: 'relative', height: '300px', overflow: 'hidden' }}>
                <img 
                  src="https://images.unsplash.com/photo-1721332149274-586f2604884d?q=80&w=1936&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                  alt="Portada"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
                <div
                  className="position-absolute"
                  style={{
                    bottom: "10px",
                    right: "10px",
                    backgroundColor: "white",
                    borderRadius: "50%",
                    padding: "10px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    boxShadow: "0px 0px 5px rgba(0,0,0,0.2)",
                    cursor: "pointer",
                    zIndex: 1
                  }}
                  // onClick={handleShow}
                >
                  <i className="fas fa-camera" style={{ fontSize: "16px", color: "black" }}></i>
                </div>
              </div>
            <div className="d-flex flex-wrap flex-sm-nowrap mb-3">
              <div className="me-7 mb-4" style={{ marginTop: '-80px' }}>
                <ProfileImage />
              </div>
            </div>

            <div className="d-flex overflow-auto h-55px">
              <ul className="nav nav-stretch nav-line-tabs nav-line-tabs-2x border-transparent fs-10 fw-bolder flex-nowrap">
                <li className="nav-item">
                  <Link
                    className={
                      `nav-link text-active-primary me-6 ` +
                      (location.pathname ===
                        "/crafted/pages/profile/feed" && "active")
                    }
                    to="/crafted/pages/profile/feed"
                  >
                    Publicaciones
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className={
                      `nav-link text-active-primary me-6 ` +
                      (location.pathname ===
                        "/crafted/pages/profile/information" && "active")
                    }
                    to="/crafted/pages/profile/information"
                  >
                    Informacion
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className={
                      `nav-link text-active-primary me-6 ` +
                      (location.pathname ===
                        "/crafted/pages/profile/friend" && "active")
                    }
                    to="/crafted/pages/profile/friend"
                  >
                    Amigos
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className={
                      `nav-link text-active-primary me-6 ` +
                      (location.pathname ===
                        "/crafted/pages/profile/photos" && "active")
                    }
                    to="/crafted/pages/profile/photos"
                  >
                    Fotos
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className={
                      `nav-link text-active-primary me-6 ` +
                      (location.pathname ===
                        "/crafted/pages/profile/videos" && "active")
                    }
                    to="/crafted/pages/profile/videos"
                  >
                    Videos
                  </Link>
                </li>
             
              </ul>
            </div>
          </div>
        </div>
      </Content>
    </>
  );
};

export { ProfileHeader };
