import {Navigate, Routes, Route, Outlet} from 'react-router-dom'
import {PageLink, PageTitle} from '../../../features/layout/core'
import {Overview} from './components/Overview'

import {ProfileHeader} from './ProfileHeader'
import { InformationsUser } from './components/Projects'
import FriendList from './pages/Friends/FriendList'
import PhotoPage from './pages/Photos/PhotoPage'
import VideosPages from './pages/videos/VideosPages'

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
            <PageTitle breadcrumbs={profileBreadCrumbs}>Overview</PageTitle>
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
            <PageTitle breadcrumbs={profileBreadCrumbs}>Campaigns</PageTitle>
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
            <PageTitle breadcrumbs={profileBreadCrumbs}>Connections</PageTitle>
            <VideosPages />
          </>
        }
      />
      <Route index element={<Navigate to='/crafted/pages/profile/feed' />} />
    </Route>
  </Routes>
)

export default ProfilePage
