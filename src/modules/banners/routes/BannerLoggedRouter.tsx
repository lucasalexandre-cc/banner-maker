import React from 'react';

import { Route } from 'react-router-dom';
import { BannersListPage, CreateBannerPage } from 'modules/banners/pages';

const BannerLoggedRouter: React.FC = () => {
  return (
    <>
      <Route exact path="/" component={BannersListPage} />
      <Route exact path="/create" component={CreateBannerPage} />
    </>
  );
}

export default BannerLoggedRouter;
