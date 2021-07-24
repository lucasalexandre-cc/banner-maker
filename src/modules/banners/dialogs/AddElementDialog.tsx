import React from 'react';
import styled from 'styled-components';

import { DefaultDialogContainer } from 'modules/shared/components';

const AddElementDialog: React.FC = () => {
  return (
    <DefaultDialogContainer>
      <Title>Adicione um elemento ao banner</Title>
    </DefaultDialogContainer>
  );
}

const Title = styled.h1`
  width: 100%;
  text-align: center;
  font-size: 1.5em;
  font-weight: bold;
`;

export default AddElementDialog;
