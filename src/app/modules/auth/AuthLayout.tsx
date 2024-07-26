/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';

const AuthLayout = () => {
  useEffect(() => {
    const root = document.getElementById('root');
    if (root) {
      root.style.height = '100%';
    }
    return () => {
      if (root) {
        root.style.height = 'auto';
      }
    };
  }, []);

  const location = useLocation();
  const currentPath = location.pathname;

  // Determine width based on the current path
  const getWidth = () => {
    if (currentPath.includes('/login')) {
      return '100%';
    } else if (currentPath.includes('/registration')) {
      return '50%';
    }
    return '100%'; // Default width if no specific path is matched
  };

  return (
    <div
      className='d-flex flex-column flex-lg-row flex-column-fluid'
     
    >
      {/* begin::Body */}
      <div className='d-flex flex-column flex-lg-row-fluid w-lg-50 p-10 '>
        {/* begin::Form */}
        <div className='d-flex flex-center flex-column'>
          {/* begin::Wrapper */}
          <Outlet />

        </div>
      </div>
    </div>
  );
};

export { AuthLayout };
