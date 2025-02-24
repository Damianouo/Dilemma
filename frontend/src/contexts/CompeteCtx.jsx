import { createContext, useReducer } from "react";
import { getCompeteEntries, shuffleArray } from "../utils/entry";

const initialValue = {
  _id: "",
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
  return <CompeteCtx.Provider value={{ compete, dispatch }}>{children}</CompeteCtx.Provider>;
};

export default CompeteCtxProvider;

function reducer(compete, action) {
  function updateState(newState, save = true) {
    const nextState = { ...compete, ...newState };
    const data = localStorage.getItem("competeContent");
    if (save) {
      const newData = data
        ? { ...JSON.parse(data), [compete._id]: nextState }
        : { [compete._id]: nextState };
      localStorage.setItem("competeContent", JSON.stringify(newData));
    } else {
      const parsedData = JSON.parse(data);
      delete parsedData[compete._id];
      localStorage.setItem("competeContent", JSON.stringify(parsedData));
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
      const contest = action.payload;
      const participantsNum = compete.participantsNum || contest.totalParticipants;
      const competeEntries = getCompeteEntries(contest.entries, participantsNum);
      return {
        ...compete,
        _id: contest._id,
        phase: "compete",
        participantsNum,
        entries: competeEntries,
      };
    }
    case "endCompeting": {
      return updateState(initialValue, false);
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
    case "changeOpponent": {
      const index = action.payload;
      const entriesPart1 = compete.entries.slice(0, index);
      const entriesPart2 = shuffleArray(compete.entries.slice(index));
      const newEntries = [...entriesPart1, ...entriesPart2];
      return updateState({
        entries: newEntries,
      });
    }
    default: {
      throw new Error("unknown action " + action.type);
    }
  }
}
