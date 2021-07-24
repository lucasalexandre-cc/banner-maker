import React, { useCallback } from 'react';
import styled from 'styled-components';

import { shadows } from 'modules/shared/styles';
import { BannerPreview, AddElementToBannerButton } from 'modules/banners/components';
import { AddElementDialog } from 'modules/banners/dialogs';
import { DesktopBannerProvider } from 'modules/banners/providers';
import { useDialogContext } from 'modules/shared/providers/DialogProvider';

const CreateBannerPage: React.FC = () => {
  const dialogContext = useDialogContext();

  const openAddElementDialog = useCallback(() => {
    dialogContext?.setDialog(<AddElementDialog />)
  }, []);

  return (
    <DesktopBannerProvider>
      <Container>
        <Title>Insira as informações do seu banner</Title>
        <BannerPreview />
        <AddElementToBannerButton onClick={openAddElementDialog} />
      </Container>
    </DesktopBannerProvider>
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
  margin-bottom: 40px;
`;

export default CreateBannerPage;
