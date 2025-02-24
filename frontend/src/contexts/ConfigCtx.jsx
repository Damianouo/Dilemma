import { createContext, useReducer } from "react";

const initialConfig = {
  phase: "info",
  totalCandidates: 8,
};
export const ConfigCtx = createContext();

const ConfigCtxProvider = ({ children }) => {
  const [config, configDispatch] = useReducer(configReducer, initialConfig);
  return <ConfigCtx.Provider value={{ config, configDispatch }}>{children}</ConfigCtx.Provider>;
};

export default ConfigCtxProvider;

function configReducer(config, action) {
  switch (action.type) {
    case "changePhase": {
      return {
        ...config,
        phase: action.phase,
      };
    }

    case "editTotalCandidates": {
      return {
        ...config,
        totalCandidates: action.totalCandidates,
      };
    }

    default: {
      throw Error("Unknown action" + action.type);
    }
  }
}
