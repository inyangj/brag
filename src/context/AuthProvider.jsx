import { createContext, useState } from "react";

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
    const [auth, setAuth] = useState({});
    const [hasBusinessUpdated, setHasBusinessUpdated] = useState(false);

    const updateHasBusinessUpdated = (value) => {
      setHasBusinessUpdated(value);
    };

    return (
        <AuthContext.Provider value={{ auth, setAuth, hasBusinessUpdated, updateHasBusinessUpdated }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContext;