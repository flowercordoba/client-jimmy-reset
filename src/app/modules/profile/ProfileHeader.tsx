import { FC } from "react";
import { Link, useLocation } from "react-router-dom";
import { useAuth } from "../auth";
import { Content } from "../../../features/layout/components/content";
import ProfileImage from "./pages/accounts/ProfileImage";
import CoverImage from "./pages/accounts/CoverImage";
import AboutMe from "./pages/accounts/AboutMe";


const ProfileHeader: FC = () => {
  const { currentUser } = useAuth();
  const location = useLocation();

  return (
    <>
      <Content>
        <div className="card mb-5 mb-xl-10">
          <div className="card-body pt-9 pb-0">
            <CoverImage />
            <div className="d-flex flex-wrap flex-sm-nowrap mb-3">
              <div className="d-flex me-7 mb-4" style={{ marginTop: '-80px' }}>
                <ProfileImage />
                <div style={{ marginTop: '80px', marginLeft: '20px'}}>
                  <AboutMe name={currentUser?.user.username || ''}/>
                </div>
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
