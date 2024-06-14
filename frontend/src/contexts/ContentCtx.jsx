/* eslint-disable react/prop-types */
import { createContext } from "react";

const initialContent = {
  id: "",
  types: "",
  totalNumber: 8,
  title: "",
  desc: "",
  items: [],
};

export const ContentCtx = createContext(initialContent);
