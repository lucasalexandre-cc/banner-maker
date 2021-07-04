import React, { useCallback } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';

const AddBannerButton: React.FC = () => {
  
  return (
    <Container>
      <CustonIcon icon={faPlusCircle} />
      <Text>Criar banner</Text>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  align-items: center;
  margin-top: 15px;
  font-size: 1.3em;
  cursor: pointer;
`;

const CustonIcon = styled(FontAwesomeIcon)`
`;

const Text = styled.div`
  margin-left: 8px;
`;

export default AddBannerButton;