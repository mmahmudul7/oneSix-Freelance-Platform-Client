import {createContext} from "react";
import useAuth from "../hooks/useAuth";

const AuthContext = createContext(); // Global Variable

export const AuthProvider = ({children}) => {
  const allContext = useAuth();

  return (
    <AuthContext.Provider value={allContext}>{children}</AuthContext.Provider>
  );
};

export default AuthContext;
