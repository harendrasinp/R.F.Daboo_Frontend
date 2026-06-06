"use client";

import { createContext,useState } from "react";

export const ContextAPI= createContext();

export const ContextProvider = ({ children }) => {
  const [isOpenLogin, setIsOpenLogin] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isHambergerOpen, setIsHamburgerOpen] = useState(false);
//   -----------------------Login Modal Function------------------ -----
  const openLoginModalFunction = () => {
    setIsOpenLogin(!isOpenLogin);
  };
// ------------------------Mobile Menu Function-------------------------
  const openMobileMenuFunction = () => {
    setIsMenuOpen(!isMenuOpen);
    setIsHamburgerOpen(!isHambergerOpen);
  };
// --------------------------------Hamburger Menu Function-------------------------

  return (
    <ContextAPI.Provider
      value={{
        isOpenLogin,
        openLoginModalFunction,
        isMenuOpen,
        openMobileMenuFunction,
        isHambergerOpen,
      }}
    >
      {children}
    </ ContextAPI.Provider>
  );
}



