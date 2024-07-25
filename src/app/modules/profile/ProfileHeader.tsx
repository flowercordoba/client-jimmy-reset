import { FC } from "react";
import { Link, useLocation } from "react-router-dom";
import { Content } from "../../../features/layout/components/content";
import { useAuth } from "../auth";

const ProfileHeader: FC = () => {
  const location = useLocation();
  const { currentUser } = useAuth();

  return (
    <>
      <Content>
        <div className="card mb-5 mb-xl-10">
          <div className="card-body pt-9 pb-0">
            <div className="d-flex flex-wrap flex-sm-nowrap mb-3">
              <div className="me-7 mb-4">
                <div className="symbol symbol-100px symbol-lg-160px symbol-fixed position-relative">
                  <img
                    alt="Profile Image"
                    src={`${currentUser?.profilePicture}`}
                    className="rounded-circle"
                    style={{
                      width: "120px",
                      height: "120px",
                      objectFit: "cover",
                    }}
                  />{" "}
                  <div className="position-absolute translate-middle bottom-0 start-100 mb-6 bg-success rounded-circle border border-4 border-white h-20px w-20px"></div>
                </div>
              </div>
                      user info resta el portada
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
