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

      <InputTitle>Data de inicio do banner</InputTitle>
      <DatePicker
        selected={bannerData.initialDate}
        onChange={(result) => onUpdateInput('initialDate', result)}
        showTimeSelect
        dateFormat="Pp"
        locale="pt-br"
      />

      <InputTitle>Data de fim do banner</InputTitle>
      <DatePicker
        selected={bannerData.endDate}
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

export default BannerInternalInfoForm;
