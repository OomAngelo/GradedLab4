import { createContext, useState } from "react";

export const UserContext = createContext(null);

export default function UserProvider({ children }) {
  const [userDetails, setUserDetails] = useState([
    {
      name: "",
      email: "",
      number: "",
      address: "",
      city: "",
      state: "",
      zip: "",
      card: "",
      expire: "",
      cvv: "",
    },
  ]);
  return (
    <UserContext.Provider value={{ userDetails, setUserDetails }}>
      {children}
    </UserContext.Provider>
  );
}
