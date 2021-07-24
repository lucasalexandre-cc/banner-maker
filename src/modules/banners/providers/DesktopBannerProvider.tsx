import React, { createContext, useContext, useState } from 'react';

import type { DesktopBannerData, } from 'modules/banners/types';
import type { ProviderPropsData } from 'modules/shared/types';

type ContextValue = null | DesktopBannerData;

export const DesktopBannerContext = createContext<ContextValue>(null);

const DesktopBannerProvider: React.FC<ProviderPropsData> = (props) => {
  const [bannerData, setBannerData] = useState(INITIAL_BANNER_DATA);

  return (
    <DesktopBannerContext.Provider value={bannerData}>
      {props.children}
    </DesktopBannerContext.Provider>
  )
}

const INITIAL_BANNER_DATA = {
  container: {
    backgroundType: 'normal',
    backgroundColor: '#CCC'
  },
};

export const useDesktopBannerContext = () => useContext(DesktopBannerContext);

export default DesktopBannerProvider;
