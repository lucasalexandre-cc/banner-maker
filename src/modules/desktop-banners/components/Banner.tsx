import React, { useCallback } from 'react';
import { useMutation } from '@apollo/client';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';

import { colors } from 'modules/shared/styles';
import { GraphqlMutationResponseData } from 'modules/desktop-banners/types/queries';
import { DELETE_BANNER } from 'modules/shared/queries/banner-queries';

type BannerData = {
  id: number;
  name: string;
};

const Banner: React.FC<{ data: BannerData }> = ({ data }) => {
  const [deleteBannerReq] = useMutation<{
    deleteBanner: GraphqlMutationResponseData;
  }>(DELETE_BANNER);

  const onEditClick = useCallback(() => {
    // TO-DO redirect to edit page
  }, []);

  const onDeleteClick = useCallback(async () => {
    const response = await deleteBannerReq({
      variables: { bannerId: data.id }
    });
    const responseData = response.data?.deleteBanner;
    if (responseData?.success) {
      alert('Banner excluido com sucesso!');
      window.location.reload();
      return;
    }

    alert(
      responseData?.errorMessage ||
        'Erro ao excluir banner. Entre em contato com um desenvolvedor.'
    );
  }, []);

  return (
    <Container>
      <Name>{data.name}</Name>
      <ButtonsContainer>
        <CustomIcon
          icon={faEdit}
          color={colors.warningOrangeColor}
          onClick={onEditClick}
        />
        <CustomIcon
          icon={faTrash}
          color={colors.warningRedColor}
          onClick={onDeleteClick}
        />
      </ButtonsContainer>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 10px 0;
  padding: 0 20px;
  border: 1px solid black;
`;

const Name = styled.div`
  font-weight: bold;
`;

const ButtonsContainer = styled.div``;

const CustomIcon = styled(FontAwesomeIcon)`
  cursor: pointer;
  color: ${({ color }) => color};
  margin: 0 5px;
`;

export default Banner;
