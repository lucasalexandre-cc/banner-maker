import React from 'react';
import { ApolloProvider, } from "@apollo/client";

import { RailsApi } from 'modules/shared/apis';
import DialogProvider from './DialogProvider';
import type { ProviderPropsData } from 'modules/shared/types';

const RootProviders: React.FC<ProviderPropsData> = ({ children }) => {
  return (
    <ApolloProvider client={RailsApi}>
      <DialogProvider>
        {children}
      </DialogProvider>
    </ApolloProvider>
  )
}

export default RootProviders;