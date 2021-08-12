import React from 'react';
import ReactModal from 'react-modal';

import { useDialogContext } from 'modules/shared/providers/DialogProvider';

const style: ReactModal.Styles = {
  content: {
    position: 'absolute',
    top: '0',
    right: '0',
    bottom: '0',
    left: '0',
    border: 'none',
    background: 'transparent',
    padding: 0,
  },
  overlay: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100vw',
    height: '100vh',
    background: 'rgba(255, 255, 255, 0.9)',
    textAlign: 'center',
    zIndex: 100,
  },
};


const BaseDialog: React.FC = () => {
  const dialogContext = useDialogContext();

  const dialog = dialogContext?.dialog;
  return (
    <ReactModal style={style} isOpen={!!dialog}>
      {dialog}
    </ReactModal>
  );
}

export default BaseDialog;
