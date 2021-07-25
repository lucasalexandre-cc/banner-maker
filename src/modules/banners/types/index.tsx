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

type DesktopBannerData = {
  container: DesktopBannerContainerData,
  strip?: DesktopBannerStripData
};

type DesktopBannerLightData = {
  container?: DesktopBannerContainerData,
  strip?: DesktopBannerStripData
};

type DesktopBannerContextData = {
  bannerData: DesktopBannerData,
  updateBannerData: (key: string, value: any) => void,
  deleteData: (key: any) => void
}

export type {
  DesktopBannerContainerData,
  DesktopBannerStripData,
  DesktopBannerData,
  DesktopBannerLightData,
  DesktopBannerContextData
};