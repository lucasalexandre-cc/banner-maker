import { useCallback } from 'react';

import { 
  DesktopBannerData,
  DesktopBannerContainerData ,
  DesktopBannerStripData,
  DesktopBannerTitleData,
  DesktopBannerSubtitleData,
  DesktopBannerButtonData,
  BannerPublicData,
} from 'modules/desktop-banners/types';

export default function useValidate() {
  const getContainerDataErrors = useCallback((containerData: DesktopBannerContainerData): Array<string> => {
    const errors: Array<string> = [];
    if(containerData.backgroundType === 'normal') {
      if(!containerData.backgroundColor || containerData.backgroundColor[0] !== "#")
       errors.push("Por favor, informe uma cor para o fundo do banner");
    }
    else {
      if(
        !containerData.backgroundColorLinear01 || 
        containerData.backgroundColorLinear01[0] !== "#" ||
        !containerData.backgroundColorLinear02 || 
        containerData.backgroundColorLinear02[0] !== "#"
      ) errors.push("Por favor, informe uma cor para o fundo do banner");
    }
    
    return errors;
  }, []);

  const getStripErrors = useCallback((stripData: DesktopBannerStripData | undefined): Array<string> => {
    const errors: Array<string> = [];
    if(!stripData) return errors;

    if(!stripData.backgroundColor || stripData.backgroundColor[0] !== '#') errors.push("Cor de fundo da faixa é obrigatório");
    if(!stripData.fontColor || stripData.fontColor[0] !== '#') errors.push("Cor da fonte da faixa é obrigatório");
    if(!stripData.text) errors.push("Texto da faixa é obrigatório");

    return errors;
  }, []);

  const getTitleErrors = useCallback((titleData: DesktopBannerTitleData | undefined): Array<string> => {
    const errors: Array<string> = [];
    if(!titleData) return errors;

    if(!titleData.fontColor || titleData.fontColor[0] !== '#') errors.push("Cor da fonte do texto principal é obrigatório");
    if(!titleData.text) errors.push("Texto do texto principal é obrigatório");

    return errors;
  }, []);

  const getSubtitleErrors = useCallback((subtitleData: DesktopBannerSubtitleData | undefined): Array<string> => {
    const errors: Array<string> = [];
    if(!subtitleData) return errors;

    if(!subtitleData.fontColor || subtitleData.fontColor[0] !== '#') errors.push("Cor da fonte do texto secundário é obrigatório");
    if(!subtitleData.text) errors.push("Texto do texto secundário é obrigatório");

    return errors;
  }, []);

  const getButtonErrors = useCallback((buttonData: DesktopBannerButtonData | undefined): Array<string> => {
    const errors: Array<string> = [];
    if(!buttonData) return errors;

    if(!buttonData.backgroundColor || buttonData.backgroundColor[0] !== '#') errors.push("Cor de fundo do botão é obrigatório");
    if(!buttonData.fontColor || buttonData.fontColor[0] !== '#') errors.push("Cor da fonte do botão é obrigatório");
    if(!buttonData.text) errors.push("Texto do botão é obrigatório");

    return errors;
  }, []);

  const getPublicBannerErrors = useCallback((publicBannerData: BannerPublicData): Array<string> => {
    const errors: Array<string> = [];

    if(publicBannerData.universities.type === 'specifics') {
      if(publicBannerData.universities.ids?.length === 0) errors.push("Obrigatório informar as universidades que vão aparecer no banner");
    }

    return errors;
  }, []);

  const getBannerDataErrors = useCallback((bannerData: DesktopBannerData): Array<string> => {
    const errors: Array<string> = [];

    if(!bannerData.name) errors.push("Nome do banner é obrigatório");
    if(!bannerData.initialDate) errors.push("Data inicial do banner é obrigatório");
    if(!bannerData.endDate) errors.push("Data final do banner é obrigatório");

    return errors;
  }, []);

  const validateBannerData = useCallback((bannerData: DesktopBannerData): Array<string> => {
    const containerErrors = getContainerDataErrors(bannerData.container);
    const stripErrors = getStripErrors(bannerData.strip);
    const titleErrors = getTitleErrors(bannerData.title);
    const subtitleErrors = getSubtitleErrors(bannerData.subtitle);
    const buttonErrors = getButtonErrors(bannerData.button);
    const publicBannerErrors = getPublicBannerErrors(bannerData.public);
    const bannerDataErrors = getBannerDataErrors(bannerData);

    return [
      ...containerErrors,
      ...stripErrors,
      ...titleErrors,
      ...subtitleErrors,
      ...buttonErrors,
      ...publicBannerErrors,
      ...bannerDataErrors
    ];
  }, [
    getContainerDataErrors, 
    getStripErrors, 
    getTitleErrors, 
    getSubtitleErrors,
    getButtonErrors,
    getPublicBannerErrors,
    getBannerDataErrors
  ]);

  return { validateBannerData };
}
