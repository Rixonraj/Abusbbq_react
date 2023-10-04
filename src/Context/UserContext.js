import { createContext, useState } from "react";
export const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const [contextCart, setcontextCart] = useState([]);
    return <UserContext.Provider value={{ contextCart, setcontextCart }}>{children}</UserContext.Provider>
};