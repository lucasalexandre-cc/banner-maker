import React, { useCallback } from 'react';
import styled from 'styled-components';

import { useDesktopBannerContext } from 'modules/banners/providers/DesktopBannerProvider';
import { useDialogContext } from 'modules/shared/providers/DialogProvider';
import type { 
  DesktopBannerStripData,
  DesktopBannerContainerData,
  DesktopBannerLightData,
  DesktopBannerTitleData,
  DesktopBannerSubtitleData,
  DesktopBannerButtonData
} from 'modules/banners/types';
import { 
  StripDialog, 
  ContainerDialog, 
  TitleDialog, 
  SubtitleDialog,
  ButtonDialog
} from 'modules/banners/dialogs';

type BannerPreviewProp = {
  bannerData?: DesktopBannerLightData,
  disableClick?: boolean
}

const BannerPreview: React.FC<BannerPreviewProp> = (props) => {
  const desktopBannerContext = useDesktopBannerContext();
  const dialogContext = useDialogContext();

  const onBannerContainerClick = useCallback(() => {
    if(props.disableClick) return;

    dialogContext?.setDialog(<ContainerDialog />);
  }, [dialogContext]);

  const onBannerStripClick = useCallback((event) => {
    if(props.disableClick) return;

    event.stopPropagation();
    dialogContext?.setDialog(<StripDialog />);
  }, [dialogContext]);

  const onBannerTitleClick = useCallback((event) => {
    if(props.disableClick) return;

    event.stopPropagation();
    dialogContext?.setDialog(<TitleDialog />);
  }, [dialogContext]);

  const onBannerSubtitleClick = useCallback((event) => {
    if(props.disableClick) return;

    event.stopPropagation();
    dialogContext?.setDialog(<SubtitleDialog />);
  }, [dialogContext]);

  const onBannerButtonClick = useCallback((event) => {
    if(props.disableClick) return;

    event.stopPropagation();
    dialogContext?.setDialog(<ButtonDialog />);
  }, [dialogContext]);

  let bannerData = desktopBannerContext?.bannerData;
  if(!bannerData) return null;
  if(props.bannerData) bannerData = { ...bannerData, ...props.bannerData };

  return (
    <Container {...bannerData.container} onClick={onBannerContainerClick}>
      {bannerData.strip && <Strip {...bannerData.strip} onClick={onBannerStripClick}>{bannerData.strip.text}</Strip>}
      <TextContainer>
        {bannerData.title && <TextTitle {...bannerData.title} onClick={onBannerTitleClick}>{bannerData.title.text}</TextTitle>}
        {bannerData.subtitle && <TextSubtitle {...bannerData.subtitle} onClick={onBannerSubtitleClick}>{bannerData.subtitle.text}</TextSubtitle>}
      </TextContainer>
      {bannerData.button && <Button {...bannerData.button} onClick={onBannerButtonClick}>{bannerData.button.text}</Button>}
    </Container>
  );
}

const Container = styled.div<DesktopBannerContainerData>`
  position: relative;
  overflow: hidden;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  height: 120px;
  ${({ backgroundType, backgroundColor, backgroundColorLinear01, backgroundColorLinear02 }) => {
    if(backgroundType === 'normal') return `background-color: ${backgroundColor};`
    return `background-image: linear-gradient(to right, ${backgroundColorLinear01}, ${backgroundColorLinear02});`
  }}
  cursor: pointer;
`;

const Strip = styled.div<DesktopBannerStripData>`
  position: absolute;
  top: 20px;
  left: -38px;
  width: 150px;
  height: 35px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ fontColor }) => fontColor};
  font-size: 1.2em;
  background-color: ${({ backgroundColor }) => backgroundColor};
  transform: rotate(-45deg);
`;

const TextContainer = styled.div`
  max-width: 720px;
`;

const TextTitle = styled.h1<DesktopBannerTitleData>`
  font-size: 1.5em;
  font-weight: bold;
  text-align: center;
  color: ${({fontColor}) => fontColor };
`;

const TextSubtitle = styled.h1<DesktopBannerSubtitleData>`
  font-size: ${({size}) => size === 'big' ? '1.5em' : '1.2em' };
  font-weight: bold;
  text-align: center;
  color: ${({fontColor}) => fontColor };
  margin-top: 5px;
`;

const Button = styled.div<DesktopBannerButtonData>`
  max-width: 350px;
  padding: 20px 30px;
  background-color: ${({backgroundColor}) => backgroundColor || "#000"};
  color: ${({fontColor}) => fontColor || "#FFF"};
  border-radius: 30px;
  font-size: 1.3em;
  font-weight: bold;
  box-shadow: 0px 4px 4px rgb(0 0 0 / 25%);
`;

export default BannerPreview;
