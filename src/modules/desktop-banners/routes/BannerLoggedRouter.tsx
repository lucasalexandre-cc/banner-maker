import React from 'react';
import { Route, useRouteMatch } from 'react-router-dom';

import {
  BannersListPage,
  CreateAndEditBannerPage
} from 'modules/desktop-banners/pages';

const DesktopBannerLoggedRouter: React.FC = () => {
  const { url } = useRouteMatch();

  return (
    <>
      <Route exact path={`${url}/`} component={BannersListPage} />
      <Route exact path={`${url}/create`} component={CreateAndEditBannerPage} />
      <Route
        exact
        path={`${url}/edit/:bannerId`}
        component={CreateAndEditBannerPage}
      />
    </>
  );
};

export default DesktopBannerLoggedRouter;
