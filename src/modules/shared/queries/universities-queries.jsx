import { gql } from "@apollo/client";

export const GET_UNIVERSITIES = gql`
  query universities {
    universities {
      id
      name
      acronym
      state
    }
  }
`;
