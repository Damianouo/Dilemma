/* eslint-disable react/prop-types */
import { createContext, useState } from "react";

const initialValue = {
  _id: "",
  author: {},
  category: "",
  title: "",
  description: "",
  totalParticipants: 0,
  entries: [],
};

export const ContestCtx = createContext(initialValue);

const ContestCtxProvider = ({ children }) => {
  const [contest, setContest] = useState(initialValue);
  return (
    <ContestCtx.Provider value={{ contest, setContest }}>
      {children}
    </ContestCtx.Provider>
  );
};

export default ContestCtxProvider;
