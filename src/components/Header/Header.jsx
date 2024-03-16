import React from 'react';
import { Outlet } from 'react-router-dom';
import { AuthSection } from '../AuthSection/AuthSection';
import { Navigation } from '../Navigation/Navigation';

export const Header = () => {
  return (
    <>
      <header className="header">
        <AuthSection />
        <Navigation />
      </header>

      <Outlet />
    </>
  );
};
