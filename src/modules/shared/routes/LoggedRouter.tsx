import React from 'react';

import { Route } from 'react-router-dom';
import DesktopBannerLoggedRouter from 'modules/desktop-banners/routes/BannerLoggedRouter';

const LoggedRouter: React.FC = () => {
  return (
    <>
      <Route path="/desktop-banner">
        <DesktopBannerLoggedRouter />
      </Route>
    </>
  );
};

export default LoggedRouter;
