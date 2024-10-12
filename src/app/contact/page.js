"use client"
import React from 'react'
import Header from '../_components/Header'
import AOS from 'aos';
import 'aos/dist/aos.css'; 

const ContactPage  = () => {
  
   React.useEffect(() => {
    AOS.init({
      duration: 1000, 
      once: true,
    });
  }, []);
  return (
    <>
      <Header/>
      <div>Contact Page</div>
    </>
  )
}

export default ContactPage 