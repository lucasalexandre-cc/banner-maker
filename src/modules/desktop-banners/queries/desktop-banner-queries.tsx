import { gql } from '@apollo/client';

const CREATE_DESKTOP_BANNER = gql`
  mutation createDesktopBanner($bannerData: BannerData!, $bannerType: String!) {
    createDesktopBanner(bannerData: $bannerData, bannerType: $bannerType) {
      success
      errorMessage
      successMessage
    }
  }
`;

const GET_DESKTOP_BANNERS = gql`
  query bannerMakerGetBanners {
    bannerMakerGetBanners {
      id
      name
    }
  }
`;

export { CREATE_DESKTOP_BANNER, GET_DESKTOP_BANNERS };

