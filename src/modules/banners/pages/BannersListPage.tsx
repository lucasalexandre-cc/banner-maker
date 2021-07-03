import React from 'react';
import styled from 'styled-components';

import { shadows } from 'modules/shared/styles';
import { Banner } from 'modules/banners/components';

const BannersListPage: React.FC = () => {
  return (
    <Container>
      <Title>Lista de banners</Title>
      <ListContainer>
        <Banner />
        <Banner />
        <Banner />
      </ListContainer>
    </Container>
  );
}

const Container = styled.div`
  width: 1080px;
  max-width: 95%;
  margin: 60px auto 30px auto;
  background-color: #FFF;
  padding: 30px;
  border-radius: 20px;
  ${shadows.cardShadow};
`;

const Title = styled.h1`
  width: 100%;
  text-align: center;
  font-size: 1.5em;
  font-weight: bold;
`;

const ListContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding-top: 50px;
`;

export default BannersListPage;
