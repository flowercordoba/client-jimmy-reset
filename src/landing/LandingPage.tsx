import React from 'react';
import { useThemeMode } from '../features/partials/layout/theme-mode/ThemeModeProvider';
import HeaderLanding from './components/HeaderLanding';
import './LandingPage.scss';
import clsx from 'clsx';

const LandingPage = () => {
  const { mode } = useThemeMode();

  const pageClass = clsx('landing-page', {
    'dark-mode': mode === 'dark',
  });

  return (
    <div className={pageClass}>
      <div className="grid-container">
        <div  className="grid-item item-combined">
          <HeaderLanding />
        </div>
    

        
      </div>
    </div>
  );
};

export default LandingPage;
