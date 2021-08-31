import React from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';

import { useUserContext } from 'modules/shared/providers/UserProvider';
import { Loading } from 'modules/shared/components';
import LoggedRouter from './LoggedRouter';
import UnloggedRouter from './UnloggedRouter';

const Routes: React.FC = () => {
  const userContext = useUserContext();

  if (userContext?.loading) return <Loading />;
  return (
    <BrowserRouter>
      <Switch>
        {userContext?.user ? <LoggedRouter /> : <UnloggedRouter />}
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
