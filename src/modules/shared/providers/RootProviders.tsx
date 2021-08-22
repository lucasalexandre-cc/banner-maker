import React from 'react';
import { ApolloProvider } from '@apollo/client';

import { RailsApi } from 'modules/shared/apis';
import type { ProviderPropsData } from 'modules/shared/types';
import DialogProvider from './DialogProvider';

const RootProviders: React.FC<ProviderPropsData> = ({ children }) => {
  return (
    <ApolloProvider client={RailsApi}>
      <DialogProvider>{children}</DialogProvider>
    </ApolloProvider>
  );
};

export default RootProviders;
