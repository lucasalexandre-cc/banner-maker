import React, { createContext, useContext } from 'react';
import { useQuery } from '@apollo/client';

import type { ProviderPropsData } from 'modules/shared/types';
import type { UserData } from 'modules/shared/types/user-type';
import { GET_USER } from 'modules/shared/queries/user-queries';

type UserProviderData = {
  user: UserData | null | undefined;
  loading: boolean;
};
type ContextValue = UserProviderData | null;

export const UserContext = createContext<ContextValue>(null);

const UserProvider: React.FC<ProviderPropsData> = ({ children }) => {
  const { data: userDataResponse, loading } =
    useQuery<{ bannerMakerGetUser: UserData }>(GET_USER);

  const user = userDataResponse?.bannerMakerGetUser;
  return (
    <UserContext.Provider value={{ user, loading }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => useContext(UserContext);

export default UserProvider;
