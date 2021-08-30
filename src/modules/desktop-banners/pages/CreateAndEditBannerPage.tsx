import React, { useCallback } from 'react';
import styled from 'styled-components';

import { BaseDialog } from 'modules/shared/dialogs';
import { shadows } from 'modules/shared/styles';
import {
  BannerPreview,
  AddElementToBannerButton,
  BannerPublicPreview,
  UpdateBannerPublicButton,
  BannerInternalInfoForm,
  SaveBannerButton
} from 'modules/desktop-banners/components';
import {
  AddElementDialog,
  EditBannerPublicDialog
} from 'modules/desktop-banners/dialogs';
import { DesktopBannerProvider } from 'modules/desktop-banners/providers';
import { useDialogContext } from 'modules/shared/providers/DialogProvider';

const CreateAndEditBannerPage: React.FC = () => {
  const dialogContext = useDialogContext();

  const openAddElementDialog = useCallback(() => {
    dialogContext?.setDialog(<AddElementDialog />);
  }, [dialogContext]);

  const openEditBannerPublicDialog = useCallback(() => {
    dialogContext?.setDialog(<EditBannerPublicDialog />);
  }, [dialogContext]);

  return (
    <DesktopBannerProvider>
      <Container>
        <Title>Informações do banner</Title>
        <BannerInternalInfoForm />

        <Title>Layout do banner</Title>
        <BannerPreview />
        <AddElementToBannerButton onClick={openAddElementDialog} />

        <Title marginTop="40px">Publico do banner</Title>
        <BannerPublicPreview />
        <UpdateBannerPublicButton onClick={openEditBannerPublicDialog} />

        <SaveBannerButton />
      </Container>
      <BaseDialog />
    </DesktopBannerProvider>
  );
};

const Container = styled.div`
  width: 1080px;
  max-width: 95%;
  margin: 60px auto 30px auto;
  background-color: #fff;
  padding: 30px;
  border-radius: 20px;
  ${shadows.cardShadow};
`;

type TitleData = {
  marginTop?: string;
};

const Title = styled.h1<TitleData>`
  width: 100%;
  text-align: center;
  font-size: 1.5em;
  font-weight: bold;
  margin-bottom: 40px;
  ${({ marginTop }) => marginTop && `margin-top: ${marginTop};`}
`;

export default CreateAndEditBannerPage;
