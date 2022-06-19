import { createContext, useState } from "react";

const userContext = createContext();

export const User = ({ children }) => {
  const [user, setUser] = useState(null);

  return <userContext.Provider>{children}</userContext.Provider>;
};
export default userContext;
