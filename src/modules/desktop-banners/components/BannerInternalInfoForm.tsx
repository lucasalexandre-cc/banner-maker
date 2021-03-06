import 'react-datepicker/dist/react-datepicker.css';
import React, { useCallback } from 'react';
import styled from 'styled-components';
import DatePicker from 'react-datepicker';
import { TextField } from '@material-ui/core';

import { useDesktopBannerContext } from 'modules/desktop-banners/providers/DesktopBannerProvider';

const BannerInternalInfoForm: React.FC = () => {
  const desktopBannerContext = useDesktopBannerContext();

  const onUpdateInput = useCallback(
    (key, value) => {
      desktopBannerContext?.updateBannerData(key, value);
    },
    [desktopBannerContext]
  );

  const bannerData = desktopBannerContext?.bannerData;
  if (!bannerData) return null;

  return (
    <Container>
      <CustomInput
        required
        label="Nome do banner"
        value={bannerData.name}
        onChange={(event) => onUpdateInput('name', event.target.value)}
        variant="outlined"
      />
      <ObsInfo>
        Obs: os nomes dos eventos do amplitude serão baseador no nome do banner.
        Por exemplo, caso o nome do banner seja &quot;Banner CAMPANHA_X
        Vendas&quot;, os eventos do amplitude serão: &quot;Banner CAMPANHA_X
        Vendas: Visualizou Banner&quot; e &quot;Banner CAMPANHA_X Vendas: Clicou
        Banner&quot;.
      </ObsInfo>

      <InputTitle>Data de inicio do banner</InputTitle>
      <DatePicker
        selected={
          typeof bannerData.initialDate !== 'string'
            ? bannerData.initialDate
            : null
        }
        onChange={(result) => onUpdateInput('initialDate', result)}
        showTimeSelect
        dateFormat="Pp"
        locale="pt-br"
      />

      <InputTitle>Data de fim do banner</InputTitle>
      <DatePicker
        selected={
          typeof bannerData.endDate !== 'string' ? bannerData.endDate : null
        }
        onChange={(result) => onUpdateInput('endDate', result)}
        showTimeSelect
        dateFormat="Pp"
        locale="pt-br"
      />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 50px;
`;

const CustomInput = styled(TextField)`
  width: 100%;
`;

const InputTitle = styled.div`
  font-size: 1.1em;
  font-weight: bold;
  margin: 5px 0;
`;

const ObsInfo = styled.div`
  margin: 5px 0;
  font-size: 0.75em;
  font-weight: bold;
`;

export default BannerInternalInfoForm;
