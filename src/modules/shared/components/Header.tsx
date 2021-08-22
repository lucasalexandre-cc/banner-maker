import React from 'react';
import styled from 'styled-components';

import { colors } from 'modules/shared/styles';

const Headers: React.FC = () => {
  return <Container>Responde Aí - Banner Maker</Container>;
};

const Container = styled.div`
  width: 100%;
  background-color: ${colors.mainOrange};
  padding: 15px 0;
  text-align: center;
  font-size: 1.5em;
  font-weight: bold;
  color: #fff;
`;

export default Headers;
