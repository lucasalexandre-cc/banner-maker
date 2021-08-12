import React, { useState, useCallback } from 'react';
import styled from 'styled-components';
import TextField from '@material-ui/core/TextField';

import { useDesktopBannerContext } from 'modules/desktop-banners/providers/DesktopBannerProvider';
import { useDialogContext } from 'modules/shared/providers/DialogProvider';
import { DefaultDialogContainer } from 'modules/shared/components';
import { ColorInputPicker } from 'modules/shared/components';

const TitleDialog: React.FC = () => {
  const desktopBannerContext = useDesktopBannerContext();
  const [title, setTitle] = useState(desktopBannerContext?.bannerData?.title || DEFAULT_TITLE_DATA);
  const dialogContext = useDialogContext();

  const onUpdateInput = useCallback((key, value) => {
    setTitle({ ...title, [key]: value });
  }, [title, setTitle]);

  const validateTitleData = useCallback(() => {
    if(!title.text) return false;
    if(!title.fontColor || title.fontColor[0] !== '#') return false;

    return true;
  }, [title]);

  const showDeleteButton = useCallback(() => {
    return !!desktopBannerContext?.bannerData?.title;
  }, [desktopBannerContext]);

  const onSaveTitle = useCallback(() => {
    if(!validateTitleData()) {
      alert("Form inválido");
      return;
    }

    desktopBannerContext?.updateBannerData('title', title);
    dialogContext?.unsetDialog();
  }, [validateTitleData, desktopBannerContext, title, dialogContext]);

  const onDeleteTitle = useCallback(() => {
    desktopBannerContext?.deleteData('title');
    dialogContext?.unsetDialog();
  }, [desktopBannerContext, dialogContext]);

  return (
    <DefaultDialogContainer>
      <Title>Adicionar uma frase principal</Title>
      <Form>
        <CustomInput
          required
          label="Texto da frase"
          value={title.text}
          onChange={event => onUpdateInput('text', event.target.value)}
          variant="outlined"
        />

        <ColorInputPicker 
          label="Cor do texto da frase"
          color={title.fontColor}
          onChange={newColor => onUpdateInput('fontColor', newColor)}
        />

        <CustomButton onClick={onSaveTitle}>Salvar</CustomButton>
        {showDeleteButton() && 
          <CustomButton onClick={onDeleteTitle}>Deletar</CustomButton>
        }
      </Form>
    </DefaultDialogContainer>
  );
}

const DEFAULT_TITLE_DATA = {
  text: '',
  fontColor: '#000'
};

const Title = styled.h1`
  width: 100%;
  text-align: center;
  font-size: 1.5em;
  font-weight: bold;
`;

const Form = styled.div`
  width: 600px;
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`;

const CustomInput = styled(TextField)`
  width: 100%;
  margin: 10px 0;
`;

const CustomButton = styled.button`
  margin: 10px 0;
  padding: 10px 20px;
  background-color: #000;
  color: #FFF;
`;

export default TitleDialog;
