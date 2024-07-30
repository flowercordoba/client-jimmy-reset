import React from "react";
import { Navigate, Route, Routes, Outlet } from "react-router-dom";
// import { PageLink } from "../../../features/layout/core";
import { Settings } from "./components/settings/Settings";
// import {AccountHeader} from './AccountHeader'
import VideosPages from "../profile/pages/videos/VideosPages";
import FriendPages from "../profile/pages/Friends/FriendPages";
import PhotoPage from "../profile/pages/Photos/PhotoPage";
import { AccountHeader } from "../profile/pages/accounts/AccountHeader";
import { Overview } from "../profile/components/Overview";


const AccountPage: React.FC = () => {
  return (
    <Routes>
      <Route
        element={
          <>
            <AccountHeader/>
            <Outlet />
          </>
        }
      >
        <Route
          path="feed"
          element={
            <>
              {/* <PageTitle breadcrumbs={accountBreadCrumbs}>Detalle</PageTitle> */}
              <Overview />
            </>
          }
        />
        <Route
          path="settings"
          element={
            <>
              {/* <PageTitle breadcrumbs={accountBreadCrumbs}>Settings</PageTitle> */}
              <Settings />
            </>
          }
        />
        <Route
          path="videos"
          element={
            <>
              <VideosPages />
            </>
          }
        />
        <Route
          path="friends"
          element={
            <>
              <FriendPages />
            </>
          }
        />

        <Route
          path="photos"
          element={
            <>
              <PhotoPage />
            </>
          }
        />

        <Route index element={<Navigate to="/crafted/account/overview" />} />
      </Route>
    </Routes>
  );
};

export default AccountPage;
