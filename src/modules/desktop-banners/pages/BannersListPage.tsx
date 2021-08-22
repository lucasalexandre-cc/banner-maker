import React, { useCallback } from 'react';
import styled from 'styled-components';
import { useHistory } from "react-router-dom";
import { useQuery } from "@apollo/client";

import { shadows, } from 'modules/shared/styles';
import { Banner, AddBannerButton } from 'modules/desktop-banners/components';
import { GET_DESKTOP_BANNERS } from 'modules/desktop-banners/queries/desktop-banner-queries';

type BannerQueryType = {
  id: number,
  name: string
}

const BannersListPage: React.FC = () => {
  const history = useHistory();
  const { data: bannersResponse, error, loading } = useQuery<{bannerMakerGetBanners: Array<BannerQueryType>}>(GET_DESKTOP_BANNERS);

  const onClickCreateBanner = useCallback(() => {
    history.push('/desktop-banner/create');
  }, [history]);

  if(error || loading) return null;

  const banners = bannersResponse?.bannerMakerGetBanners;
  return (
    <Container>
      <Title>Lista de banners</Title>
      <ListContainer>
        {banners?.map(banner => (
          <Banner key={banner.id} data={banner} />
        ))}
      </ListContainer>
      <AddBannerButton onClick={onClickCreateBanner} />
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
