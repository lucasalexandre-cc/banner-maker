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

const EDIT_DESKTOP_BANNER = gql`
  mutation editDesktopBanner($bannerData: BannerData!, $bannerId: String!) {
    editDesktopBanner(bannerData: $bannerData, bannerId: $bannerId) {
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

const GET_DESKTOP_BANNER = gql`
  query bannerMakerGetDesktopBannerFullData($bannerId: String!) {
    bannerMakerGetDesktopBannerFullData(bannerId: $bannerId) {
      name
      initialDate
      endDate
      container {
        backgroundType
        backgroundColor
        backgroundColorLinear01
        backgroundColorLinear02
        redirectLink
      }
      strip {
        text
        fontColor
        backgroundColor
      }
      title {
        text
        fontColor
      }
      subtitle {
        text
        fontColor
        size
      }
      button {
        text
        fontColor
        backgroundColor
      }
      public {
        universities {
          type
          ids
        }
        userAccess {
          type
          trialReason
        }
      }
    }
  }
`;

export {
  CREATE_DESKTOP_BANNER,
  GET_DESKTOP_BANNERS,
  GET_DESKTOP_BANNER,
  EDIT_DESKTOP_BANNER
};
