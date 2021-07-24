import React, { createContext, useContext, useState } from 'react';
import type { ProviderPropsData } from 'modules/shared/types';

type DialogProviderData = {
  dialog: JSX.Element | null,
  setDialog: React.Dispatch<React.SetStateAction<JSX.Element | null>>
}
type ContextValue = DialogProviderData | null;

export const DialogContext = createContext<ContextValue>(null);

const DialogProvider: React.FC<ProviderPropsData> = (props) => {
  const [dialog, setDialog] = useState<JSX.Element | null>(null);

  return (
    <DialogContext.Provider value={{setDialog, dialog}}>
      {props.children}
    </DialogContext.Provider>
  )
}

export const useDialogContext = () => useContext(DialogContext);

export default DialogProvider;
