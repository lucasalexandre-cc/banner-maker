import React, { useCallback, useState } from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';

import { useDesktopBannerContext } from 'modules/desktop-banners/providers/DesktopBannerProvider';

const SaveBannerButton: React.FC = () => {
  const desktopBannerContext = useDesktopBannerContext();
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  const onCreateBannerClick = useCallback(async () => {
    if (loading) return;

    setLoading(true);
    const responseData = await desktopBannerContext?.saveBanner();
    if (responseData?.success) {
      alert('Banner salvo com sucesso.');
      history.push('/desktop-banner');
      return;
    }

    alert(
      responseData?.errorMessage ||
        'Erro ao salvar banner. Entre em contato com um desenvolvedor'
    );
    setLoading(false);
  }, [desktopBannerContext, loading]);

  return (
    <Container onClick={onCreateBannerClick}>
      {loading ? 'Salvando...' : 'Salvar banner'}
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

export default SaveBannerButton;
