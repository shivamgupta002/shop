"use client"
import React from 'react'
import Header from '../_components/Header'
import AOS from 'aos';
import 'aos/dist/aos.css'; 

const ServicePage = () => {
  
   React.useEffect(() => {
    AOS.init({
      duration: 1000, 
      once: true, 
    });
  }, []);
  return (
    <>
      <Header/>
      <div>Contact page</div>
    </>
  )
}

export default ServicePage