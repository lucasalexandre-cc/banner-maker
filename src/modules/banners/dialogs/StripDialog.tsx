import React, { useState, useCallback } from 'react';
import styled from 'styled-components';
import TextField from '@material-ui/core/TextField';

import { useDesktopBannerContext } from 'modules/banners/providers/DesktopBannerProvider';
import { useDialogContext } from 'modules/shared/providers/DialogProvider';
import { DefaultDialogContainer } from 'modules/shared/components';
import { ColorInputPicker } from 'modules/shared/components';

const StripDialog: React.FC = () => {
  const desktopBannerContext = useDesktopBannerContext();
  const [strip, setStrip] = useState(desktopBannerContext?.bannerData?.strip || DEFAULT_STRIP_DATA);
  const dialogContext = useDialogContext();

  const onUpdateInput = useCallback((key, value) => {
    setStrip({ ...strip, [key]: value });
  }, [strip, setStrip]);

  const validateStripData = useCallback(() => {
    if(!strip.text) return false;
    if(!strip.fontColor || strip.fontColor[0] !== '#') return false;
    if(!strip.backgroundColor || strip.backgroundColor[0] !== '#') return false;

    return true;
  }, [strip]);

  const showDeleteButton = useCallback(() => {
    return !!desktopBannerContext?.bannerData?.strip;
  }, [desktopBannerContext]);

  const onSaveStrip = useCallback(() => {
    if(!validateStripData()) {
      alert("Form inválido");
      return;
    }

    desktopBannerContext?.updateBannerData('strip', strip);
    dialogContext?.unsetDialog();
  }, [validateStripData, desktopBannerContext, strip]);

  const onDeleteStrip = useCallback(() => {
    desktopBannerContext?.deleteData('strip');
    dialogContext?.unsetDialog();
  }, [validateStripData, desktopBannerContext, strip]);

  return (
    <DefaultDialogContainer>
      <Title>Crie sua faixa</Title>
      <Form>
        <CustomInput
          required
          label="Texto da Faixa"
          value={strip.text}
          onChange={event => onUpdateInput('text', event.target.value)}
          variant="outlined"
        />

        <ColorInputPicker 
          label="Cor do texto da faixa"
          color={strip.fontColor}
          onChange={newColor => onUpdateInput('fontColor', newColor)}
        />

        <ColorInputPicker 
          label="Cor do fundo da faixa"
          color={strip.backgroundColor}
          onChange={newColor => onUpdateInput('backgroundColor', newColor)}
        />

        <CustomButton onClick={onSaveStrip}>Salvar</CustomButton>
        {showDeleteButton() && 
          <CustomButton onClick={onDeleteStrip}>Deletar</CustomButton>
        }
      </Form>
    </DefaultDialogContainer>
  );
}

const DEFAULT_STRIP_DATA = {
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

export default StripDialog;
