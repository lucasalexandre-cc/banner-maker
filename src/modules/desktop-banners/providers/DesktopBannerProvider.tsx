import React, { createContext, useContext, useState, useCallback } from 'react';
import { useMutation } from '@apollo/client';

import { colors } from 'modules/shared/styles';
import { CREATE_DESKTOP_BANNER } from 'modules/desktop-banners/queries/desktop-banner-queries';
import { useValidate } from 'modules/desktop-banners/hooks';
import type { DesktopBannerContextData, DesktopBannerData, CreateBannerResponseData } from 'modules/desktop-banners/types';
import type { ProviderPropsData } from 'modules/shared/types';

type ContextValue = DesktopBannerContextData | null;

export const DesktopBannerContext = createContext<ContextValue>(null);

const DesktopBannerProvider: React.FC<ProviderPropsData> = (props) => {
  const [bannerData, setBannerData] = useState(INITIAL_BANNER_DATA);
  const [createBannerReq] = useMutation<{createDesktopBanner: CreateBannerResponseData}>(CREATE_DESKTOP_BANNER);
  const { validateBannerData } = useValidate();

  const updateBannerData = useCallback((key, value) => {
    setBannerData({ ...bannerData, [key]: value });
  }, [bannerData, setBannerData]);

  const deleteData = useCallback((key: keyof DesktopBannerData) => {
    const newBannerData = { ...bannerData };
    delete newBannerData[key];
    setBannerData(newBannerData);
  }, [bannerData, setBannerData]);

  const createBanner = useCallback(async () => {
    const errors = validateBannerData(bannerData);
    if(errors.length > 0) {
      alert(errors.join('.\n'));
      return;
    }
    const response = await createBannerReq({ variables: { bannerData: bannerData, bannerType: 'desktop' }, });
    return response.data?.createDesktopBanner;
  }, [bannerData, createBannerReq, validateBannerData]);

  return (
    <DesktopBannerContext.Provider value={{
      bannerData, 
      updateBannerData, 
      deleteData, 
      createBanner
    }}>
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
      type: 'all_users'
    },
    universities: {
      type: 'all_universities'
    }
  },
  name: '',
  initialDate: new Date(),
  endDate: new Date(),
} as DesktopBannerData;

export default DesktopBannerProvider;
