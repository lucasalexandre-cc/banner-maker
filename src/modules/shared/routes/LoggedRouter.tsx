import React from 'react';

import { BrowserRouter, Switch } from 'react-router-dom';
import BannerLoggedRouter from 'modules/banners/routes/BannerLoggedRouter';

const LoggedRouter: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <BannerLoggedRouter />
      </Switch>
    </BrowserRouter>
  );
}

export default LoggedRouter;
