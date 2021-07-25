import React, { useState, useCallback, useMemo } from 'react';
import styled from 'styled-components';
import { TextField, RadioGroup, FormControlLabel, Radio } from '@material-ui/core';

import { useDesktopBannerContext } from 'modules/banners/providers/DesktopBannerProvider';
import { useDialogContext } from 'modules/shared/providers/DialogProvider';
import { DefaultDialogContainer } from 'modules/shared/components';
import { ColorInputPicker } from 'modules/shared/components';
import { DesktopBannerContainerData } from 'modules/banners/types';

const ContainerDialog: React.FC = () => {
  const desktopBannerContext = useDesktopBannerContext();
  const [container, setContainer] = useState(desktopBannerContext?.bannerData?.container);
  const dialogContext = useDialogContext();

  const onUpdateInput = useCallback((key, value) => {
    const newContainer = { ...container, [key]: value } as DesktopBannerContainerData;
    setContainer(newContainer);
  }, [container, setContainer]);

  const validateContainerData = useCallback(() => {
    if(container?.backgroundType === 'normal') {
      if(!container.backgroundColor || container.backgroundColor[0] !== '#') return false;
    }

    if(container?.backgroundType === 'linear-gradient') {
      if(!container.backgroundColorLinear01 || container.backgroundColorLinear01[0] !== '#') return false;
      if(!container.backgroundColorLinear02 || container.backgroundColorLinear02[0] !== '#') return false;
    }

    if(!container?.redirectLink) return false;
    return true;
  }, [container]);

  const onSaveContainer = useCallback(() => {
    if(!validateContainerData()) {
      alert("Form inválido");
      return;
    }

    desktopBannerContext?.updateBannerData('container', container);
    dialogContext?.unsetDialog();
  }, [validateContainerData, desktopBannerContext, container, dialogContext]);

  const backgroundTypes = useMemo(() => {
    return [{name: 'Normal', value: 'normal'}, {name: 'Degrade', value: 'linear-gradient'}];
  }, []);

  const getContainerBackgroundInputContainer = useCallback(() => {
    if(container?.backgroundType === 'normal') return (
      <ColorInputPicker 
        label="Cor do fundo"
        color={container?.backgroundColor}
        onChange={newColor => onUpdateInput('backgroundColor', newColor)}
      />
    )

    return (
      <>
        <ColorInputPicker 
          label="Cor do fundo (degrade inicial)"
          color={container?.backgroundColorLinear01}
          onChange={newColor => onUpdateInput('backgroundColorLinear01', newColor)}
        />
        <ColorInputPicker 
          label="Cor do fundo (degrade final)"
          color={container?.backgroundColorLinear02}
          onChange={newColor => onUpdateInput('backgroundColorLinear02', newColor)}
        />
      </>
    )
  }, [container, onUpdateInput]);

  return (
    <DefaultDialogContainer>
      <Title>Edite o container do banner</Title>
      <Form>
        <CustomLabel>Tipo de fundo do banner</CustomLabel>
        <RadioGroup value={container?.backgroundType} onChange={(event) => onUpdateInput('backgroundType', event.target.value)}>        
        {backgroundTypes.map(bcType => (
          <FormControlLabel key={bcType.value} value={bcType.value} control={<Radio />} label={bcType.name} />
        ))}
        </RadioGroup>

        {getContainerBackgroundInputContainer()}
        <CustomInput
          required
          label="Link de redirect do banner"
          value={container?.redirectLink}
          onChange={event => onUpdateInput('redirectLink', event.target.value)}
          variant="outlined"
        />
        <CustomButton onClick={onSaveContainer}>Salvar</CustomButton>
      </Form>
    </DefaultDialogContainer>
  );
}

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

const CustomLabel = styled.h1`
`;

const CustomButton = styled.button`
  margin: 10px 0;
  padding: 10px 20px;
  background-color: #000;
  color: #FFF;
`;

const CustomInput = styled(TextField)`
  width: 100%;
  margin: 10px 0;
`;

export default ContainerDialog;
