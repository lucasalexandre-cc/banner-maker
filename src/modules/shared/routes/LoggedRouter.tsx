import React from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom';
import DesktopBannerLoggedRouter from 'modules/desktop-banners/routes/BannerLoggedRouter';

const LoggedRouter: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/desktop-banner">
          <DesktopBannerLoggedRouter />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default LoggedRouter;
