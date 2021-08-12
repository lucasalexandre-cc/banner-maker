import React, { useState, useCallback } from 'react';
import styled from 'styled-components';
import TextField from '@material-ui/core/TextField';

import { useDesktopBannerContext } from 'modules/desktop-banners/providers/DesktopBannerProvider';
import { useDialogContext } from 'modules/shared/providers/DialogProvider';
import { DefaultDialogContainer } from 'modules/shared/components';
import { ColorInputPicker } from 'modules/shared/components';

const ButtonDialog: React.FC = () => {
  const desktopBannerContext = useDesktopBannerContext();
  const [button, setButton] = useState(desktopBannerContext?.bannerData?.button || DEFAULT_BUTTON_DATA);
  const dialogContext = useDialogContext();

  const onUpdateInput = useCallback((key, value) => {
    setButton({ ...button, [key]: value });
  }, [button, setButton]);

  const validateButtonData = useCallback(() => {
    if(!button.text) return false;
    if(!button.fontColor || button.fontColor[0] !== '#') return false;
    if(!button.backgroundColor || button.backgroundColor[0] !== '#') return false;

    return true;
  }, [button]);

  const showDeleteButton = useCallback(() => {
    return !!desktopBannerContext?.bannerData?.button;
  }, [desktopBannerContext]);

  const onSaveButton = useCallback(() => {
    if(!validateButtonData()) {
      alert("Form inválido");
      return;
    }

    desktopBannerContext?.updateBannerData('button', button);
    dialogContext?.unsetDialog();
  }, [validateButtonData, desktopBannerContext, button, dialogContext]);

  const onDeleteButton = useCallback(() => {
    desktopBannerContext?.deleteData('button');
    dialogContext?.unsetDialog();
  }, [desktopBannerContext, dialogContext]);

  return (
    <DefaultDialogContainer>
      <Title>Crie sua faixa</Title>
      <Form>
        <CustomInput
          required
          label="Texto do Botão"
          value={button.text}
          onChange={event => onUpdateInput('text', event.target.value)}
          variant="outlined"
        />

        <ColorInputPicker 
          label="Cor do texto do botão"
          color={button.fontColor}
          onChange={newColor => onUpdateInput('fontColor', newColor)}
        />

        <ColorInputPicker 
          label="Cor do fundo do botão"
          color={button.backgroundColor}
          onChange={newColor => onUpdateInput('backgroundColor', newColor)}
        />

        <CustomButton onClick={onSaveButton}>Salvar</CustomButton>
        {showDeleteButton() && 
          <CustomButton onClick={onDeleteButton}>Deletar</CustomButton>
        }
      </Form>
    </DefaultDialogContainer>
  );
}

const DEFAULT_BUTTON_DATA = {
  text: '',
  fontColor: '#000',
  backgroundColor: '#FF00DC'
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

export default ButtonDialog;
