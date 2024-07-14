import { useContext } from "react";
import { CompeteCtx } from "../contexts/CompeteCtx";

const useCompeteCtx = () => {
  const { compete, dispatch } = useContext(CompeteCtx);
  function setState(obj) {
    dispatch({
      type: "setState",
      payload: obj,
    });
  }
  function changePhase(str) {
    dispatch({
      type: "changePhase",
      payload: str,
    });
  }
  function changeParticipants(num) {
    dispatch({
      type: "changeParticipants",
      payload: num,
    });
  }

  function startCompeting(entries) {
    dispatch({
      type: "startCompeting",
      payload: entries,
    });
  }
  function chooseWinner(winItem, loseItem) {
    dispatch({
      type: "chooseWinner",
      payload: { winItem, loseItem },
    });
  }

  const handler = {
    setState,
    changePhase,
    changeParticipants,
    startCompeting,
    chooseWinner,
  };

  return { compete, handler, dispatch };
};

export default useCompeteCtx;
