import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';

type AddBannerParams = {
  onClick: () => void;
};

const AddElementToBannerButton: React.FC<AddBannerParams> = ({ onClick }) => {
  return (
    <Container onClick={onClick}>
      <CustonIcon icon={faPlusCircle} />
      <Text>Adicionar elemento</Text>
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

export default AddElementToBannerButton;
