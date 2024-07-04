import { useContext } from "react";
import { ModalCtx } from "../contexts/ModalCtx";

const useModalCtx = () => {
  return useContext(ModalCtx);
};

export default useModalCtx;
