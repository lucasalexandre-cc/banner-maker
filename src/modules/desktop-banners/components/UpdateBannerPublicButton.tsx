import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit } from '@fortawesome/free-solid-svg-icons';

type UpdateBannerPublicParams = {
  onClick: () => void;
};

const UpdateBannerPublicButton: React.FC<UpdateBannerPublicParams> = ({
  onClick
}) => {
  return (
    <Container onClick={onClick}>
      <CustonIcon icon={faEdit} />
      <Text>Editar público</Text>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  align-items: center;
  margin-top: 15px;
  font-size: 1.3em;
  cursor: pointer;
`;

const CustonIcon = styled(FontAwesomeIcon)``;

const Text = styled.div`
  margin-left: 8px;
`;

export default UpdateBannerPublicButton;
