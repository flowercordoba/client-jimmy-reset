import React from 'react'
import {Navigate, Route, Routes, Outlet} from 'react-router-dom'
import {Overview} from './components/Overview'
import {Settings} from './components/settings/Settings'
import {AccountHeader} from './AccountHeader'
import PhotoPage from '../Photos/PhotoPage'
import FriendPages from '../Friends/FriendPages'
import VideosPages from '../videos/VideosPages'

// const accountBreadCrumbs: Array<PageLink> = [
//   {
//     title: 'Account',
//     path: '/crafted/account/overview',
//     isSeparator: false,
//     isActive: false,
//   },
//   {
//     title: '',
//     path: '',
//     isSeparator: true,
//     isActive: false,
//   },
// ]

const AccountPage: React.FC = () => {
  return (
    <Routes>
      <Route
        element={
          <>
            <AccountHeader userId={''} />
            <Outlet />
          </>
        }
      >
        <Route
          path='overview'
          element={
            <>
              <Overview />
            </>
          }
        />
        <Route
          path='settings'
          element={
            <>
              <Settings />
            </>
          }
        />
    <Route
          path='videos'
          element={
            <>
            <VideosPages/>
            </>
          }
        />
            <Route
          path='friends'
          element={
            <>
            <FriendPages/>
            </>
          }
        />
            <Route
          path='photos'
          element={
            <>
            <PhotoPage/>
            </>
          }
        />
        <Route index element={<Navigate to='/crafted/account/overview' />} />
      </Route>
    </Routes>
  )
}

export default AccountPage
