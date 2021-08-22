import React, { useState, useCallback, useMemo } from 'react';
import styled from 'styled-components';
import {
  TextField,
  RadioGroup,
  FormControlLabel,
  Radio
} from '@material-ui/core';

import { useDesktopBannerContext } from 'modules/desktop-banners/providers/DesktopBannerProvider';
import { useDialogContext } from 'modules/shared/providers/DialogProvider';
import {
  DefaultDialogContainer,
  ColorInputPicker
} from 'modules/shared/components';

const SubtitleDialog: React.FC = () => {
  const desktopBannerContext = useDesktopBannerContext();
  const [subtitle, setSubtitle] = useState(
    desktopBannerContext?.bannerData?.subtitle || DEFAULT_SUBTITLE_DATA
  );
  const dialogContext = useDialogContext();

  const onUpdateInput = useCallback(
    (key, value) => {
      setSubtitle({ ...subtitle, [key]: value });
    },
    [subtitle, setSubtitle]
  );

  const validateSubtitleData = useCallback(() => {
    if (!subtitle.text) return false;
    if (!subtitle.size) return false;
    if (!subtitle.fontColor || subtitle.fontColor[0] !== '#') return false;

    return true;
  }, [subtitle]);

  const showDeleteButton = useCallback(() => {
    return !!desktopBannerContext?.bannerData?.subtitle;
  }, [desktopBannerContext]);

  const onSaveSubtitle = useCallback(() => {
    if (!validateSubtitleData()) {
      alert('Form inválido');
      return;
    }

    desktopBannerContext?.updateBannerData('subtitle', subtitle);
    dialogContext?.unsetDialog();
  }, [validateSubtitleData, desktopBannerContext, subtitle, dialogContext]);

  const onDeleteSubtitle = useCallback(() => {
    desktopBannerContext?.deleteData('subtitle');
    dialogContext?.unsetDialog();
  }, [desktopBannerContext, dialogContext]);

  const sizeTypes = useMemo(() => {
    return [
      { name: 'Normal', value: 'normal' },
      { name: 'Grande', value: 'big' }
    ];
  }, []);

  return (
    <DefaultDialogContainer>
      <Title>Adicionar uma frase secundária</Title>
      <Form>
        <CustomInput
          required
          label="Texto da frase"
          value={subtitle.text}
          onChange={(event) => onUpdateInput('text', event.target.value)}
          variant="outlined"
        />

        <ColorInputPicker
          label="Cor do texto da faixa"
          color={subtitle.fontColor}
          onChange={(newColor) => onUpdateInput('fontColor', newColor)}
        />

        <CustomLabel>Tamanho do texto secundário</CustomLabel>
        <RadioGroup
          value={subtitle.size}
          onChange={(event) => onUpdateInput('size', event.target.value)}
        >
          {sizeTypes.map((sizeType) => (
            <FormControlLabel
              key={sizeType.value}
              value={sizeType.value}
              control={<Radio />}
              label={sizeType.name}
            />
          ))}
        </RadioGroup>

        <CustomButton onClick={onSaveSubtitle}>Salvar</CustomButton>
        {showDeleteButton() && (
          <CustomButton onClick={onDeleteSubtitle}>Deletar</CustomButton>
        )}
      </Form>
    </DefaultDialogContainer>
  );
};

const DEFAULT_SUBTITLE_DATA = {
  text: '',
  fontColor: '#000',
  size: 'normal'
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
  color: #fff;
`;

const CustomLabel = styled.h1`
  margin-top: 10px;
`;

export default SubtitleDialog;
