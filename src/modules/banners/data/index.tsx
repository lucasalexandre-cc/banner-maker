import { StripDialog } from 'modules/banners/dialogs';

const desktopBannerElements = [
  {
    id: 'strip',
    cta: 'Adicionar uma faixa',
    defaultData: {
      strip: {
        text: 'faixa',
        fontColor: '#000',
        backgroundColor: 'yellow'
      }
    },
    getDialog: () => <StripDialog />,
  }
];

export { desktopBannerElements };