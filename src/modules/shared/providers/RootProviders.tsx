import React from 'react';
import { ApolloProvider } from '@apollo/client';

import { RailsApi } from 'modules/shared/apis';
import type { ProviderPropsData } from 'modules/shared/types';
import DialogProvider from './DialogProvider';
import UserProvider from './UserProvider';

const RootProviders: React.FC<ProviderPropsData> = ({ children }) => {
  return (
    <ApolloProvider client={RailsApi}>
      <UserProvider>
        <DialogProvider>{children}</DialogProvider>
      </UserProvider>
    </ApolloProvider>
  );
};

export default RootProviders;
