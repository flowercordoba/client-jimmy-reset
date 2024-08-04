// src/App.tsx
import React, { useEffect } from 'react';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { I18nProvider } from '../features/i18n/i18nProvider';
import { LayoutSplashScreen, LayoutProvider } from '../features/layout/core';
import { MasterInit } from '../features/layout/MasterInit';
import { ThemeModeProvider } from '../features/partials';
import { AuthInit } from './modules/auth';
import { useDispatch } from 'react-redux';
import { socketService } from '../shared/services/socket.service';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    socketService.setupSocketConnection();
  }, [dispatch]);

  return (
    <Suspense fallback={<LayoutSplashScreen />}>
      <I18nProvider>
        <LayoutProvider>
          <ThemeModeProvider>
            <AuthInit>
              <Outlet />
              <MasterInit />
            </AuthInit>
          </ThemeModeProvider>
        </LayoutProvider>
      </I18nProvider>
    </Suspense>
  );
};

export { App };
