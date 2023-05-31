import React, { useState } from "react";

export const Context = React.createContext();
export function ContextFunc({ children }) {
  const [lang,setLang] = useState(true)
  
  return (
    <Context.Provider value={{lang,setLang}}>
      {children}
    </Context.Provider>
  );
}
