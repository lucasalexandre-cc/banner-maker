import React, { useCallback, useState } from 'react';
import styled from 'styled-components';

import { useDesktopBannerContext } from 'modules/desktop-banners/providers/DesktopBannerProvider';

const CreateBannerButton: React.FC = () => {
  const desktopBannerContext = useDesktopBannerContext();
  const [loading, setLoading] = useState(false);

  const onCreateBannerClick = useCallback(async () => {
    if (loading) return;

    setLoading(true);
    const responseData = await desktopBannerContext?.createBanner();
    if (responseData?.success) {
      alert(
        'Banner criado com sucesso. Agora tenho que redirecionar ele pra lista de banners com um aviso que foi criado'
      );
    } else {
      alert(responseData?.errorMessage);
    }
    setLoading(false);
  }, [desktopBannerContext, loading]);

  return (
    <Container onClick={onCreateBannerClick}>
      {loading ? 'Criando...' : 'Criar banner'}
    </Container>
  );
};

const Container = styled.div`
  margin-top: 50px;
  font-weight: bold;
  font-size: 1.4em;
  color: #fff;
  background-color: #000;
  width: fit-content;
  padding: 10px 15px;
  cursor: pointer;
`;

export default CreateBannerButton;
