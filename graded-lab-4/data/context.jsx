import { createContext, useContext, useState } from "react";
import menu from "./menu";

export const MenuContext = createContext(null);

export default function MenuProvider({ children }) {
  const [menuItems, setMenuItems] = useState(menu.menu);

  return (
    <MenuContext.Provider value={{ menuItems, setMenuItems }}>
      {children}
    </MenuContext.Provider>
  );
}
