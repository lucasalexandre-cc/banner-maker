import React, { useCallback } from 'react';
import styled from 'styled-components';

import { useDesktopBannerContext } from 'modules/banners/providers/DesktopBannerProvider';
import { useDialogContext } from 'modules/shared/providers/DialogProvider';
import type { 
  DesktopBannerContextData,
  DesktopBannerStripData,
  DesktopBannerContainerData,
  DesktopBannerLightData
} from 'modules/banners/types';
import { StripDialog } from 'modules/banners/dialogs';

type BannerPreviewProp = {
  bannerData?: DesktopBannerLightData
}

const BannerPreview: React.FC<BannerPreviewProp> = (props) => {
  const desktopBannerContext: DesktopBannerContextData | null = useDesktopBannerContext();
  const dialogContext = useDialogContext();

  const onBannerContainerClick = useCallback(() => {

  }, []);

  const onBannerStripClick = useCallback((event) => {
    event.stopPropagation();
    dialogContext?.setDialog(<StripDialog />);
  }, [dialogContext]);

  let bannerData = desktopBannerContext?.bannerData;
  if(!bannerData) return null;
  if(props.bannerData) bannerData = { ...bannerData, ...props.bannerData };
  return (
    <Container {...bannerData.container} onClick={onBannerContainerClick}>
      {bannerData.strip && <Strip {...bannerData.strip} onClick={onBannerStripClick}>{bannerData.strip.text}</Strip>}
      
    </Container>
  );
}

const Container = styled.div<DesktopBannerContainerData>`
  position: relative;
  overflow: hidden;
  display: flex;
  width: 100%;
  height: 120px;
  ${({ backgroundType, backgroundColor, backgroundColorLinear01 }) => {
    if(backgroundType === 'normal') return `background-color: ${backgroundColor};`
    return `background-image: linear-gradient(to right, ${backgroundColorLinear01}, ${backgroundColorLinear01});`
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

export default BannerPreview;
