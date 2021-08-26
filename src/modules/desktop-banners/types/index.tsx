import type { BannerPublicData } from 'modules/shared/types';
import type { GraphqlMutationResponseData } from './queries';

type DesktopBannerContainerData = {
  backgroundType: string;
  backgroundColor?: string;
  backgroundColorLinear01?: string;
  backgroundColorLinear02?: string;
  redirectLink?: string;
};

type DesktopBannerStripData = {
  text: string;
  fontColor: string;
  backgroundColor: string;
};

type DesktopBannerTitleData = {
  text: string;
  fontColor: string;
};

type DesktopBannerSubtitleData = {
  text: string;
  fontColor: string;
  size: string;
};

type DesktopBannerButtonData = {
  text: string;
  fontColor: string;
  backgroundColor: string;
};

type DesktopBannerData = {
  container: DesktopBannerContainerData;
  strip?: DesktopBannerStripData;
  title?: DesktopBannerTitleData;
  subtitle?: DesktopBannerSubtitleData;
  button?: DesktopBannerButtonData;
  public: BannerPublicData;
  name?: string;
  initialDate?: Date;
  endDate?: Date;
};

type DesktopBannerLightData = {
  container?: DesktopBannerContainerData;
  strip?: DesktopBannerStripData;
  title?: DesktopBannerTitleData;
  subtitle?: DesktopBannerSubtitleData;
  button?: DesktopBannerButtonData;
};

// to-do remove any
type DesktopBannerContextData = {
  bannerData: DesktopBannerData;
  updateBannerData: (key: string, value: any) => void;
  deleteData: (key: any) => void;
  createBanner: () => Promise<GraphqlMutationResponseData | undefined | null>;
};

export type {
  DesktopBannerContainerData,
  DesktopBannerStripData,
  DesktopBannerTitleData,
  DesktopBannerSubtitleData,
  DesktopBannerButtonData,
  BannerPublicData,
  DesktopBannerData,
  DesktopBannerLightData,
  DesktopBannerContextData
};
