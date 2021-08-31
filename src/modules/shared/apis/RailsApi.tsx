import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import Cookies from 'js-cookie';

const authLink = setContext((_, { headers }) => {
  const token = Cookies.get('banner_session');
  return {
    headers: {
      ...headers,
      'Banner-Maker-Session': token
    }
  };
});

const httpLink = createHttpLink({
  uri: `${process.env.REACT_APP_RESPONDEAI_URL}/graphql`
});

const client = new ApolloClient({
  cache: new InMemoryCache({
    addTypename: false
  }),
  link: authLink.concat(httpLink)
});

export default client;
