import { useContext } from "react";
import { ContestCtx } from "../contexts/ContestCtx";

const useContestCtx = () => {
  return useContext(ContestCtx);
};

export default useContestCtx;
