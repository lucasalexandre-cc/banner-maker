import React, { createContext, useContext, useState, useCallback } from 'react';

import { colors } from 'modules/shared/styles';

import type { DesktopBannerContextData, DesktopBannerData } from 'modules/desktop-banners/types';
import type { ProviderPropsData } from 'modules/shared/types';

type ContextValue = DesktopBannerContextData | null;

export const DesktopBannerContext = createContext<ContextValue>(null);

const DesktopBannerProvider: React.FC<ProviderPropsData> = (props) => {
  const [bannerData, setBannerData] = useState(INITIAL_BANNER_DATA);

  const updateBannerData = useCallback((key, value) => {
    setBannerData({ ...bannerData, [key]: value });
  }, [bannerData, setBannerData]);

  const deleteData = useCallback((key: keyof DesktopBannerData) => {
    const newBannerData = { ...bannerData };
    delete newBannerData[key];
    setBannerData(newBannerData);
  }, [bannerData, setBannerData]);

  return (
    <DesktopBannerContext.Provider value={{bannerData, updateBannerData, deleteData}}>
      {props.children}
    </DesktopBannerContext.Provider>
  )
}

export const useDesktopBannerContext = () => useContext(DesktopBannerContext);

const INITIAL_BANNER_DATA = {
  container: {
    backgroundType: 'normal',
    backgroundColor: colors.defaultBannerBackgroundColor
  },
  public: {
    userAccess: {
      type: 'all'
    },
    universities: {
      type: 'all'
    }
  }
} as DesktopBannerData;

export default DesktopBannerProvider;
