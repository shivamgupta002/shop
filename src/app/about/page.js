"use client"
import React from 'react'
import Header from '../_components/Header'
import AOS from 'aos';
import 'aos/dist/aos.css'; 

const AboutPage = () => {
   
   React.useEffect(() => {
    AOS.init({
      duration: 1000, 
      once: true, 
    });
  }, []);
  return (
    <>
      <Header/>
      <div>About page</div>
    </>
  )
}

export default AboutPage