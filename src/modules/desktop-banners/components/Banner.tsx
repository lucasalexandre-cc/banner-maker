import React, { useCallback } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';

import { colors } from 'modules/shared/styles';
import { BannerDataQuery } from 'modules/desktop-banners/types';

const Banner: React.FC<{data: BannerDataQuery}> = ({ data }) => {
  const onEditClick = useCallback(() => {
    // TO-DO redirect to edit page
    console.log("Click on edit");
  }, []);

  const onDeleteClick = useCallback(() => {
    // TO-DO delete banner
    console.log("Click on delete");
  }, []);

  return (
    <Container>
      <Name>{data.name}</Name>
      <ButtonsContainer>
        <CustomIcon icon={faEdit} color={colors.warningOrangeColor} onClick={onEditClick} />
        <CustomIcon icon={faTrash} color={colors.warningRedColor} onClick={onDeleteClick} />
      </ButtonsContainer>
    </Container>
  );
}

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

const ButtonsContainer = styled.div`
`;

const CustomIcon = styled(FontAwesomeIcon)`
  cursor: pointer;
  color: ${({color}) => color};
  margin: 0 5px;
`;

export default Banner;
