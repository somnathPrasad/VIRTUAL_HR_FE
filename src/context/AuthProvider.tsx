import React, { createContext, useState } from "react";

interface authInterface {
  userId?: string,
  firstName?: string,
  lastName?: string,
  companyId: string,
  accessToken?: string,
  roles: Number[]
}

interface AuthContextInterface {
  auth: authInterface,
  setAuth: React.Dispatch<React.SetStateAction<authInterface>>
}

const AuthContext = createContext<AuthContextInterface>({ auth: { roles: [], companyId: "" }, setAuth: () => { } });

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [auth, setAuth] = useState<authInterface>({ roles: [], companyId: "" });
  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthContext;
