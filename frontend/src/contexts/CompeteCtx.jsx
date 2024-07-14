/* eslint-disable react/prop-types */
import { createContext, useReducer } from "react";
import { getCompeteEntries, shuffleArray } from "../utils/entry";

const initialValue = {
  phase: "info",
  participantsNum: 0,
  match: 1,
  entries: [],
  winners: [],
  losers: [],
  result: [],
  finished: false,
};

export const CompeteCtx = createContext();

const CompeteCtxProvider = ({ children }) => {
  const [compete, dispatch] = useReducer(reducer, initialValue);
  return (
    <CompeteCtx.Provider value={{ compete, dispatch }}>
      {children}
    </CompeteCtx.Provider>
  );
};

export default CompeteCtxProvider;

function reducer(compete, action) {
  function updateState(newState, save = true) {
    const nextState = { ...compete, ...newState };
    if (save) {
      localStorage.setItem("competeContent", JSON.stringify(nextState));
    } else {
      localStorage.removeItem("competeContent");
    }
    return nextState;
  }
  switch (action.type) {
    case "setState": {
      return action.payload;
    }
    case "changePhase": {
      return {
        ...compete,
        phase: action.payload,
      };
    }
    case "changeParticipants": {
      return {
        ...compete,
        participantsNum: action.payload,
      };
    }
    case "startCompeting": {
      const competeEntries = getCompeteEntries(
        action.payload,
        compete.participantsNum,
      );
      return {
        ...compete,
        phase: "compete",
        entries: competeEntries,
      };
    }
    case "chooseWinner": {
      const { winItem, loseItem } = action.payload;
      //last match of the contest
      if (compete.participantsNum === 2) {
        const matchResult = {
          participantsNum: compete.participantsNum,
          entries: compete.entries,
          winners: [winItem],
          losers: [loseItem],
        };

        return updateState(
          {
            result: [...compete.result, matchResult],
            finished: true,
          },
          false,
        );
      }
      //last match of the round
      if (compete.match === compete.participantsNum / 2) {
        const matchResult = {
          participantsNum: compete.participantsNum,
          entries: compete.entries,
          winners: [...compete.winners, winItem],
          losers: [...compete.losers, loseItem],
        };

        return updateState({
          participantsNum: compete.participantsNum / 2,
          match: 1,
          entries: shuffleArray([...compete.winners, winItem]),
          winners: [],
          losers: [],
          result: [...compete.result, matchResult],
        });
      }
      //normal case
      return updateState({
        match: compete.match + 1,
        winners: [...compete.winners, winItem],
        losers: [...compete.losers, loseItem],
      });
    }
    default: {
      throw new Error("unknown action " + action.type);
    }
  }
}
