import React from 'react';

import {
  StripDialog,
  TitleDialog,
  SubtitleDialog,
  ButtonDialog
} from 'modules/desktop-banners/dialogs';

const desktopBannerElements = [
  {
    id: 'strip',
    cta: 'Adicionar uma faixa',
    defaultData: {
      strip: {
        text: 'Faixa',
        fontColor: '#FFF',
        backgroundColor: '#ca12b2'
      }
    },
    getDialog: (): JSX.Element => <StripDialog />
  },
  {
    id: 'title',
    cta: 'Adicionar uma frase principal',
    defaultData: {
      title: {
        text: 'Frase principal',
        fontColor: '#ca12b2'
      }
    },
    getDialog: (): JSX.Element => <TitleDialog />
  },
  {
    id: 'subtitle',
    cta: 'Adicionar uma frase secundária',
    defaultData: {
      subtitle: {
        text: 'Frase secundária',
        fontColor: '#ca12b2',
        size: 'normal'
      }
    },
    getDialog: (): JSX.Element => <SubtitleDialog />
  },
  {
    id: 'button',
    cta: 'Adicionar um botão',
    defaultData: {
      button: {
        text: 'Frase do botao',
        fontColor: '#FFF',
        backgroundColor: '#ca12b2'
      }
    },
    getDialog: (): JSX.Element => <ButtonDialog />
  }
];

export default desktopBannerElements;
