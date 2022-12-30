import React, { useState } from "react";
import "./Dark.css";
const DarkModeContext = React.createContext();

export function DarkMode({ children }) {
  const [Dark, SetDark] = useState(false);
  const value = {
    Dark,
    SetDark,
  };
  const darkTap = () => {
    SetDark(!Dark);
  };

  return (
    <>
      <DarkModeContext.Provider value={value}>
        <div className="mode__theme" onClick={() => darkTap()}>
          <div className={Dark === false ? "header__mode-dark" : "hidden-icon"}>
            <i class="uil uil-moon"></i>
          </div>
          <div
            className={
              Dark === true ? "header__mode-light show-icon" : "hidden-icon"
            }>
            <i class="uil uil-brightness"></i>
          </div>
        </div>
        {children}
      </DarkModeContext.Provider>
    </>
  );
}
