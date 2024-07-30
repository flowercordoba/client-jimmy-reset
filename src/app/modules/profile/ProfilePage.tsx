/* eslint-disable @typescript-eslint/no-unused-vars */
import {Navigate, Routes, Route, Outlet} from 'react-router-dom'
import {PageLink} from '../../../features/layout/core'
import {Overview} from './components/Overview'

import {ProfileHeader} from './ProfileHeader'
import { InformationsUser } from './components/InformationsUser'
import FriendList from './pages/Friends/FriendList'
import PhotoPage from './pages/Photos/PhotoPage'
import VideosPages from './pages/videos/VideosPages'
import { ProfileDetails } from '../accounts/components/settings/cards/ProfileDetails'
import { AccountHeader } from './pages/accounts/AccountHeader'

const profileBreadCrumbs: Array<PageLink> = [
  {
    title: 'Profile',
    path: '/crafted/pages/profile/overview',
    isSeparator: false,
    isActive: false,
  },
  {
    title: '',
    path: '',
    isSeparator: true,
    isActive: false,
  },
]

const ProfilePage = () => (
  <Routes>
    <Route
      element={
        <>
          <ProfileHeader />
          <Outlet />
        </>
      }
    >
      <Route
        path='feed'
        element={
          <>
            <Overview />
          </>
        }
      />
      <Route
        path='information'
        element={
          <>

            <InformationsUser />
          </>
        }
      />
      <Route
        path='friend'
        element={
          <>
            <FriendList />
          </>
        }
      />
      <Route
        path='photos'
        element={
          <>
            <PhotoPage />
          </>
        }
      />
      <Route
        path='videos'
        element={
          <>
            <VideosPages />
          </>
        }
      />
      <Route index element={<Navigate to='/crafted/pages/profile/feed' />} />
    </Route>
  </Routes>
)

export default ProfilePage
