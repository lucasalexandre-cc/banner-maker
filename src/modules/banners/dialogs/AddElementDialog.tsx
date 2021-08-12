import React, { useCallback, useMemo } from 'react';
import styled from 'styled-components';

import { useDialogContext } from 'modules/shared/providers/DialogProvider';
import { useDesktopBannerContext } from 'modules/banners/providers/DesktopBannerProvider';
import { DefaultDialogContainer } from 'modules/shared/components';
import { BannerPreview } from 'modules/banners/components';
import { desktopBannerElements } from 'modules/banners/data';

const AddElementDialog: React.FC = () => {
  const dialogContext = useDialogContext();
  const desktopBannerContext = useDesktopBannerContext();

  const onClickElement = useCallback((event, element) => {
    event.stopPropagation();

    dialogContext?.setDialog(element.getDialog())
  }, [dialogContext]);

  const filteredElements = useMemo(() => {
    const bannerData = desktopBannerContext?.bannerData;
    if(!bannerData) return desktopBannerElements;

    const bannerDataKeys = Object.keys(bannerData);
    return desktopBannerElements.filter(element => !bannerDataKeys.includes(element.id));
  }, [desktopBannerContext]);

  return (
    <DefaultDialogContainer>
      <Title>Adicione um elemento ao banner</Title>
      {filteredElements.map(element => (
        <Element key={element.id} onClick={event => onClickElement(event, element)}>
          <ElementName>{element.cta}</ElementName>
          <BannerPreview bannerData={element.defaultData} disableClick={true} />
        </Element>
      ))}
    </DefaultDialogContainer>
  );
}

const Title = styled.h1`
  width: 100%;
  text-align: center;
  font-size: 1.5em;
  font-weight: bold;
`;

const Element = styled.div`
  width: 100%;
  margin: 40px 0;
  cursor: pointer;
`;

const ElementName = styled.h1`
  width: 100%;
  text-align: left;
  font-weight: bold;
  margin: 5px;
`;

export default AddElementDialog;
