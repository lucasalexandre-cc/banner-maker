import React from 'react';
import DialogProvider from './DialogProvider';

import type { ProviderPropsData } from 'modules/shared/types';

const RootProviders: React.FC<ProviderPropsData> = ({ children }) => {
  return (
    <DialogProvider>
      {children}
    </DialogProvider>
  )
}

export default RootProviders;