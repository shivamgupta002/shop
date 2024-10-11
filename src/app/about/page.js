"use client"
import React from 'react'
import Header from '../_components/Header'
import AOS from 'aos';
import 'aos/dist/aos.css'; 

const page = () => {
   
   React.useEffect(() => {
    AOS.init({
      duration: 1000, 
      once: true, 
    });
  }, []);
  return (
    <>
      <Header/>
      <div>About Page</div>
    </>
  )
}

export default page