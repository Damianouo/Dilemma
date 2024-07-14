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

  function startCompeting(obj) {
    dispatch({
      type: "startCompeting",
      payload: obj,
    });
  }
  function endCompeting() {
    dispatch({ type: "endCompeting" });
  }
  function chooseWinner(winItem, loseItem) {
    dispatch({
      type: "chooseWinner",
      payload: { winItem, loseItem },
    });
  }
  function changeOpponent(index) {
    dispatch({
      type: "changeOpponent",
      payload: index,
    });
  }

  const handler = {
    setState,
    changePhase,
    changeParticipants,
    startCompeting,
    endCompeting,
    chooseWinner,
    changeOpponent,
  };

  return { compete, handler, dispatch };
};

export default useCompeteCtx;
