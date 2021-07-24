import React, { useCallback } from 'react';
import styled from 'styled-components';

import { useDesktopBannerContext } from 'modules/banners/providers/DesktopBannerProvider';
import type { 
  DesktopBannerData,
  DesktopBannerContainerData
} from 'modules/banners/types';


const BannerPreview: React.FC = () => {
  const bannerData: DesktopBannerData | null = useDesktopBannerContext();

  const onBannerContainerClick = useCallback(() => {

  }, []);

  if(!bannerData) return null;
  return (
    <Container {...bannerData.container} onClick={onBannerContainerClick}>
      
    </Container>
  );
}

const Container = styled.div<DesktopBannerContainerData>`
  display: flex;
  width: 100%;
  height: 120px;
  ${({ backgroundType, backgroundColor, backgroundColorLinear01 }) => {
    if(backgroundType === 'normal') return `background-color: ${backgroundColor};`
    return `background-image: linear-gradient(to right, ${backgroundColorLinear01}, ${backgroundColorLinear01});`
  }}
  background-color: ${({ backgroundColor }) => backgroundColor};
  cursor: pointer;
`;

export default BannerPreview;
