import {lazy, FC, Suspense} from 'react'
import {Route, Routes, Navigate} from 'react-router-dom'
import {MasterLayout} from '../../features/layout/MasterLayout'
import TopBarProgress from 'react-topbar-progress-indicator'
import {getCSSVariableValue} from '../../features/assets/ts/_utils'
import {WithChildren} from '../../features/helpers'
import { DashboardWrapperVideos } from '../pages/videos/VideosDashboardWrapper'
import { DashboardWrapperPortales } from '../pages/portales/PortalsDashboardWrapper'
import { DashboardWrapperGrupos } from '../pages/Grups/GrupsDashboardWrapper'
import { DashboardWrapperFeed } from '../pages/feed/FeedDashboardWrapper'
import ChatPage from '../modules/apps/chat/ChatPage'

const PrivateRoutes = () => {
  const ProfilePage = lazy(() => import('../modules/profile/ProfilePage'))
  const AccountPage = lazy(() => import('../modules/accounts/AccountPage'))

  return (
    <Routes>
      <Route element={<MasterLayout />}>
        <Route path='auth/*' element={<Navigate to='/dashboard' />} />
         <Route path='dashboard' element={<DashboardWrapperFeed />} />

        <Route path='Inicio' element={<DashboardWrapperFeed />} />
        <Route path='Videos' element={<DashboardWrapperVideos />} />
        <Route path='Grupos' element={<DashboardWrapperGrupos />} />
        <Route path='Portales' element={<DashboardWrapperPortales />} />

        
        
        {/* Lazy Modules */}
        <Route
          path='crafted/pages/profile/*'
          element={
            <SuspensedView>
              <ProfilePage />
            </SuspensedView>
          }
        />
 
        <Route
          path='crafted/account/*'
          element={
            <SuspensedView>
              <AccountPage />
            </SuspensedView>
          }
        />
        <Route
          path='apps/chat/*'
          element={
            <SuspensedView>
              <ChatPage />
            </SuspensedView>
          }
        />
  
        {/* Page Not Found */}
        <Route path='*' element={<Navigate to='/error/404' />} />
      </Route>
    </Routes>
  )
}

const SuspensedView: FC<WithChildren> = ({children}) => {
  const baseColor = getCSSVariableValue('--bs-primary')
  TopBarProgress.config({
    barColors: {
      '0': baseColor,
    },
    barThickness: 1,
    shadowBlur: 5,
  })
  return <Suspense fallback={<TopBarProgress />}>{children}</Suspense>
}

export {PrivateRoutes}
