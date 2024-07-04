/* eslint-disable react/prop-types */
import { createContext, useRef } from "react";

export const ModalCtx = createContext();

const ModalCtxProvider = ({ children }) => {
  const creationSubmitRef = useRef();
  const editEntryRef = useRef();
  const deleteEntryRef = useRef();
  return (
    <ModalCtx.Provider
      value={{ creationSubmitRef, editEntryRef, deleteEntryRef }}
    >
      {children}
    </ModalCtx.Provider>
  );
};

export default ModalCtxProvider;
