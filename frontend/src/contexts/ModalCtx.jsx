import { createContext, useRef } from "react";

export const ModalCtx = createContext();

const ModalCtxProvider = ({ children }) => {
  const creationSubmitRef = useRef();
  const editEntryRef = useRef();
  const deleteEntryRef = useRef();
  const updateContestRef = useRef();
  const deleteContestRef = useRef();
  return (
    <ModalCtx.Provider
      value={{
        creationSubmitRef,
        editEntryRef,
        deleteEntryRef,
        updateContestRef,
        deleteContestRef,
      }}
    >
      {children}
    </ModalCtx.Provider>
  );
};

export default ModalCtxProvider;
