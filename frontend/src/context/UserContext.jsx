import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { URL } from "./../url";

export const UserContext = createContext({});

export const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const handleRefresh = async () => {
      try {
        const res = await axios.get(URL + "/api/auth/refetch", { withCredentials: true });
        setUser(res.data);
        console.log(res);
      } catch (error) {
        console.log(error);
      }
    };
    handleRefresh();
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};
