import { createContext } from "react";

const headerContextValues = {
  toggleShow: () => {},
  show: false,
};

export default createContext(headerContextValues);
