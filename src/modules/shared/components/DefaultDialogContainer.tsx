import React, { useCallback } from 'react';
import styled from 'styled-components';

import { useDialogContext } from 'modules/shared/providers/DialogProvider';

type CustomDialogContainerData = {
  maxWidth?: string
}

type DialogContainerProps = {
  children: React.ReactNode,
  data?: CustomDialogContainerData
}

const DefaultDialogContainer: React.FC<DialogContainerProps> = ({ children, data }) => {
  const dialogContext = useDialogContext();

  const onCloseDialog = useCallback(() => {
    dialogContext?.unsetDialog();
  }, []);

  return (
    <Container>
      <Content {...data}>
        <CloseDialog onClick={onCloseDialog}>X</CloseDialog>
        {children}
      </Content>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  min-height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Content = styled.div<CustomDialogContainerData>`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 95%;
  max-width: ${({ maxWidth }) => maxWidth || '1080px' };
  background: #fff;
  border-radius: 5px;
  padding: 30px 15px 20px;
  background-color: #FFF;
  box-shadow: 1px 1px 6px rgba(0,0,0,.4);
`;

const CloseDialog = styled.div`
  position: absolute;
  top: 10px;
  right: 15px;
  font-size: 1.1em;
  font-weight: bold;
  cursor: pointer;
`;

export default DefaultDialogContainer;




