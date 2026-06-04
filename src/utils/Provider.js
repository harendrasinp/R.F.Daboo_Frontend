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
  return (
    <>
        <Header openModal={() => setIsOpen(true)} openMobileMenu={() => setIsOpenMenu(true)} />
        {children}
        <LoginModal isOpen={isOpen} onClose={() => setIsOpen(false)}/>
        <MobileSlideMenu isMenuOpen={openMenu} setOpenMenu={() => setIsOpenMenu(false)} />
        <Footer />
    </>
  )
}

export default Provider