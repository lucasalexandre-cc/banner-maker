import React, { createContext, useContext, useState, useCallback } from 'react';
import type { ProviderPropsData } from 'modules/shared/types';

type DialogProviderData = {
  dialog: JSX.Element | null,
  setDialog: React.Dispatch<React.SetStateAction<JSX.Element | null>>,
  unsetDialog: () => void
}
type ContextValue = DialogProviderData | null;

export const DialogContext = createContext<ContextValue>(null);

const DialogProvider: React.FC<ProviderPropsData> = (props) => {
  const [dialog, setDialog] = useState<JSX.Element | null>(null);

  const unsetDialog = useCallback(() => {
    setDialog(null);
  }, [setDialog]);

  return (
    <DialogContext.Provider value={{setDialog, dialog, unsetDialog}}>
      {props.children}
    </DialogContext.Provider>
  )
}

export const useDialogContext = () => useContext(DialogContext);

export default DialogProvider;
