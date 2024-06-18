/* eslint-disable react/prop-types */
import { createContext } from "react";

const initialContent = {
  _id: "",
  category: "",
  totalParticipants: 8,
  title: "",
  description: "",
  entries: [],
};

export const ContentCtx = createContext(initialContent);
