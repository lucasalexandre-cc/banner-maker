import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: `${process.env.REACT_APP_RESPONDEAI_URL}/graphql`,
  cache: new InMemoryCache({
    addTypename: false
  })
});

export default client;
