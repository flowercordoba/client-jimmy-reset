import { FC } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../../../app/modules/auth";
import { Languages } from "./Languages";

const HeaderUserMenu: FC = () => {
  const { currentUser, logout } = useAuth();
  return (
    <div
      className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg menu-state-primary fw-bold py-4 fs-6 w-275px"
      data-kt-menu="true"
    >
      <div className="menu-item px-3">
        <div className="menu-content d-flex align-items-center px-3">
          <div className="symbol symbol-50px me-5">
            <img
              alt=""
              // src={`${'https://images.unsplash.com/photo-1721804978753-6533263d89f5?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'}`}
              src={`${currentUser?.user.profilePicture}`}
              className="rounded-circle"
              style={{ width: "40px", height: "40px", objectFit: "cover" }}
            />
          </div>

          <div className="d-flex flex-column">
            <div className="fw-bolder d-flex align-items-center fs-5">
              {currentUser?.user.username}
              
              <span className="badge badge-light-success fw-bolder fs-8 px-2 py-1 ms-2">
              {currentUser?.user.email}
              </span>
            </div>
            <a className="fw-bold text-muted text-hover-primary fs-7">
              {currentUser?.user.email}
            </a>
          </div>
        </div>
      </div>

      <div className="separator my-2"></div>

      <div className="menu-item px-5">
        <Link to={"/crafted/pages/profile"} className="menu-link px-5">
          Mi cuenta
        </Link>
      </div>
      <div
        className='menu-item px-5'
        data-kt-menu-trigger='hover'
        data-kt-menu-placement='left-start'
        data-kt-menu-flip='bottom'
      >
        <a  className='menu-link px-5'>
          <span className='menu-title'>configuraciones y privacidad</span>
          <span className='menu-arrow'></span>
        </a>

        <div className='menu-sub menu-sub-dropdown w-175px py-4'>
          <div className='menu-item px-3'>
            <a  className='menu-link px-5'>
             Configuracion
            </a>
          </div>

  

          <div className='menu-item px-3'>
            <a  className='menu-link px-5'>
              Centro de prividad
            </a>
          </div>

          <div className='menu-item px-3'>
            <a  className='menu-link d-flex flex-stack px-5'>
              Feed
              <i
                className='fas fa-exclamation-circle ms-2 fs-7'
                data-bs-toggle='tooltip'
                title='View your statements'
              ></i>
            </a>
          </div>

        
        </div>
      </div>

      <div className="separator my-2"></div>

      <Languages />

      <div className="menu-item px-5 my-1">
        <Link to="/crafted/account/settings" className="menu-link px-5">
          Configuracion de la cuenta
        </Link>
      </div>

      <div className="menu-item px-5">
        <a onClick={logout} className="menu-link px-5">
          Cerra sesion
        </a>
      </div>
    </div>
  );
};

export { HeaderUserMenu };
