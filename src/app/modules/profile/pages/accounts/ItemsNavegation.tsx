import React from 'react'
import { Link } from 'react-router-dom'
import { useLocation } from "react-router";

export const ItemsNavegation = () => {
    const location = useLocation();

  return (

    <div className='d-flex overflow-auto h-55px'>
    <ul className='nav nav-stretch nav-line-tabs nav-line-tabs-2x border-transparent fs-5 fw-bolder flex-nowrap'>
      <li className='nav-item'>
        <Link
          className={
            `nav-link text-active-primary me-6 ` +
            (location.pathname === '/crafted/account/overview' && 'active')
          }
          to='/crafted/account/overview'
        >
          
          Publicaciones
        </Link>
      </li>
      <li className='nav-item'>
        <Link
          className={
            `nav-link text-active-primary me-6 ` +
            (location.pathname === '/crafted/account/settings' && 'active')
          }
          to='/crafted/account/settings'
        >
          Informacion
        </Link>
      </li>
      <li className='nav-item'>
        <Link
          className={
            `nav-link text-active-primary me-6 ` +
            (location.pathname === '/crafted/account/friends' && 'active')
          }
          to='/crafted/account/friends'
        >
          Amigos
        </Link>
      </li>
      <li className='nav-item'>
        <Link
          className={
            `nav-link text-active-primary me-6 ` +
            (location.pathname === '/crafted/account/photos' && 'active')
          }
          to='/crafted/account/photos'
        >
          Fotos
        </Link>
      </li>

      <li className='nav-item'>
        <Link
          className={
            `nav-link text-active-primary me-6 ` +
            (location.pathname === '/crafted/account/videos' && 'active')
          }
          to='/crafted/account/videos'
        >
          Videos
        </Link>
      </li>
    </ul>
  </div>  )
}


// http://localhost:3000/crafted/pages/profile/overview
// http://localhost:3000/crafted/account/overview