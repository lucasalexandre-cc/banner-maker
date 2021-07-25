type DesktopBannerContainerData = {
  backgroundType: string,
  backgroundColor?: string,
  backgroundColorLinear01?: string,
  backgroundColorLinear02?: string,
};

type DesktopBannerStripData = {
  text: string,
  fontColor: string,
  backgroundColor: string
}

type DesktopBannerTitleData = {
  text: string,
  fontColor: string
}

type DesktopBannerSubtitleData = {
  text: string,
  fontColor: string,
  size: string
}

type DesktopBannerData = {
  container: DesktopBannerContainerData,
  strip?: DesktopBannerStripData,
  title?: DesktopBannerTitleData,
  subtitle?: DesktopBannerSubtitleData
};

type DesktopBannerLightData = {
  container?: DesktopBannerContainerData,
  strip?: DesktopBannerStripData,
  title?: DesktopBannerTitleData,
  subtitle?: DesktopBannerSubtitleData
};

type DesktopBannerContextData = {
  bannerData: DesktopBannerData,
  updateBannerData: (key: string, value: any) => void,
  deleteData: (key: any) => void
}

export type {
  DesktopBannerContainerData,
  DesktopBannerStripData,
  DesktopBannerTitleData,
  DesktopBannerSubtitleData,
  DesktopBannerData,
  DesktopBannerLightData,
  DesktopBannerContextData
};