import React, {
  createContext,
  useContext,
  useState,
  useCallback,
  useEffect
} from 'react';
import { useMutation, useLazyQuery } from '@apollo/client';
import { useParams } from 'react-router-dom';

import { colors } from 'modules/shared/styles';
import {
  CREATE_DESKTOP_BANNER,
  EDIT_DESKTOP_BANNER,
  GET_DESKTOP_BANNER
} from 'modules/desktop-banners/queries/desktop-banner-queries';
import { useValidate } from 'modules/desktop-banners/hooks';
import type {
  DesktopBannerContextData,
  DesktopBannerData
} from 'modules/desktop-banners/types';
import type {
  ProviderPropsData,
  EditRouteParam,
  GraphqlMutationResponseData
} from 'modules/shared/types';

type ContextValue = DesktopBannerContextData | null;

export const DesktopBannerContext = createContext<ContextValue>(null);

const DesktopBannerProvider: React.FC<ProviderPropsData> = ({ children }) => {
  const [bannerData, setBannerData] = useState(INITIAL_BANNER_DATA);
  const [createBannerReq] = useMutation<{
    createDesktopBanner: GraphqlMutationResponseData;
  }>(CREATE_DESKTOP_BANNER);
  const [editBannerReq] = useMutation<{
    editDesktopBanner: GraphqlMutationResponseData;
  }>(EDIT_DESKTOP_BANNER);
  const [loadBannerReq, { data: loadBannerReqResponse }] = useLazyQuery<{
    bannerMakerGetDesktopBannerFullData: DesktopBannerData;
  }>(GET_DESKTOP_BANNER, { fetchPolicy: 'network-only' });
  const { validateBannerData } = useValidate();
  const { bannerId } = useParams<EditRouteParam>();

  useEffect(() => {
    loadBannerReq({ variables: { bannerId } });
  }, [bannerId]);

  useEffect(() => {
    if (!loadBannerReqResponse) return;
    const data = loadBannerReqResponse.bannerMakerGetDesktopBannerFullData;

    const newBannerData = { ...data };
    if (
      newBannerData.initialDate &&
      typeof newBannerData.initialDate === 'string'
    ) {
      newBannerData.initialDate = new Date(newBannerData.initialDate);
    }

    if (newBannerData.endDate && typeof newBannerData.endDate === 'string') {
      newBannerData.endDate = new Date(newBannerData.endDate);
    }

    setBannerData(newBannerData);
  }, [loadBannerReqResponse]);

  const updateBannerData = useCallback(
    (key, value) => {
      setBannerData({ ...bannerData, [key]: value });
    },
    [bannerData, setBannerData]
  );

  const deleteData = useCallback(
    (key: keyof DesktopBannerData) => {
      const newBannerData = { ...bannerData };
      delete newBannerData[key];
      setBannerData(newBannerData);
    },
    [bannerData, setBannerData]
  );

  const saveBanner = useCallback(async () => {
    const errors = validateBannerData(bannerData);
    if (errors.length > 0) {
      alert(errors.join('.\n'));
      return null;
    }

    if (!bannerId) {
      const response = await createBannerReq({
        variables: { bannerData, bannerType: 'desktop' }
      });
      return response.data?.createDesktopBanner;
    }

    const response = await editBannerReq({
      variables: { bannerData, bannerId }
    });
    return response.data?.editDesktopBanner;
  }, [bannerData, createBannerReq, editBannerReq, validateBannerData]);

  return (
    <DesktopBannerContext.Provider
      value={{
        bannerData,
        updateBannerData,
        deleteData,
        saveBanner
      }}
    >
      {children}
    </DesktopBannerContext.Provider>
  );
};

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
  endDate: new Date()
} as DesktopBannerData;

export default DesktopBannerProvider;
