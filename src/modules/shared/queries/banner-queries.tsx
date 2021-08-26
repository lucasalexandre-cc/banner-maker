import { gql } from '@apollo/client';

const DELETE_BANNER = gql`
  mutation deleteBanner($bannerId: Int!) {
    deleteBanner(bannerId: $bannerId) {
      success
      errorMessage
      successMessage
    }
  }
`;

export { DELETE_BANNER };
