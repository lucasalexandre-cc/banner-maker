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

export { CREATE_DESKTOP_BANNER };

