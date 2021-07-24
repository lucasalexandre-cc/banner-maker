type DesktopBannerContainerData = {
  backgroundType: string,
  backgroundColor?: string,
  backgroundColorLinear01?: string,
  backgroundColorLinear02?: string,
};

type DesktopBannerData = {
  container: DesktopBannerContainerData
};

export type {
  DesktopBannerContainerData,
  DesktopBannerData
};