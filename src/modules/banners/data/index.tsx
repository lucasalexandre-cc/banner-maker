import { StripDialog, TitleDialog, SubtitleDialog } from 'modules/banners/dialogs';

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
    getDialog: () => <StripDialog />,
  },
  {
    id: 'title',
    cta: 'Adicionar uma frase principal',
    defaultData: {
      title: {
        text: 'Frase principal',
        fontColor: '#ca12b2'
      },
    },
    getDialog: () => <TitleDialog />,
  },
  {
    id: 'subtitle',
    cta: 'Adicionar uma frase secundária',
    defaultData: {
      title: {
        text: 'Frase principal',
        fontColor: '#000'
      },
      subtitle: {
        text: 'Frase secundária',
        fontColor: '#ca12b2',
        size: 'normal'
      }
    },
    getDialog: () => <SubtitleDialog />,
  }
];

export { desktopBannerElements };