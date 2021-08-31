import React from 'react';
import styled from 'styled-components';

import { useUserContext } from 'modules/shared/providers/UserProvider';
import { colors } from 'modules/shared/styles';

const Headers: React.FC = () => {
  const userContext = useUserContext();

  const user = userContext?.user;
  return (
    <Container>
      Responde Aí - Banner Maker
      {user && <Email>Usuario: {user.email}</Email>}
    </Container>
  );
};

const Container = styled.div`
  position: relative;
  width: 100%;
  background-color: ${colors.mainOrange};
  padding: 15px 0;
  text-align: center;
  font-size: 1.5em;
  font-weight: bold;
  color: #fff;
`;

const Email = styled.div`
  position: absolute;
  left: 5px;
  bottom: 5px;
  color: #fff;
  font-size: 0.6em;
`;

export default Headers;
