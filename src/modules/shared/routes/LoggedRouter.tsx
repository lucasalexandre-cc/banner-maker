import React from 'react';

import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { BannersListPage } from 'modules/banners/pages';

const LoggedRouter: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={BannersListPage} />
      </Switch>
    </BrowserRouter>
  );
}

export default LoggedRouter;
