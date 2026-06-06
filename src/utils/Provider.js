"use client";
import React from 'react'
import Header from '../components/Header';
import Footer from '../components/Footer';
import LoginModal from '../components/LoginModal';

import { useState } from 'react';
import MobileSlideMenu from '@/components/MobileSlideMenu';

const Provider = ({children}) => {
    const [isOpen, setIsOpen] = useState(false);
    const [openMenu, setIsOpenMenu] = useState(false);
    const handleOpenLoginModal = () => {
      setIsOpenMenu(false);
      setIsOpen(true);
    }
  return (
    <>
        <Header openModal={() => setIsOpen(true)} openMobileMenu={() => setIsOpenMenu(true)} />
        {children}
        <LoginModal isOpen={isOpen} onClose={() => setIsOpen(false)}/>
        <MobileSlideMenu isMenuOpen={openMenu} setOpenMenu={() => setIsOpenMenu(false)} 
        openLoginModal={handleOpenLoginModal} />
        <Footer />
    </>
  )
}

export default Provider