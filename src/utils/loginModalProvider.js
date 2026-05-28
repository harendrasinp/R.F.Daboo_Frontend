"use client";
import React from 'react'
import Header from '../components/Header';
import Footer from '../components/Footer';
import LoginModal from '../components/LoginModal';
import { useState } from 'react';

const LoginModalProvider = ({children}) => {
    const [isOpen, setIsOpen] = useState(false);
  return (
    <>
        <Header openModal={() => setIsOpen(true)} />
        {children}
        <LoginModal
            isOpen={isOpen}
            onClose={() => setIsOpen(false)}
        />  
        <Footer />
    </>
  )
}

export default LoginModalProvider