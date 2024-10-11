"use client";
import * as React from 'react';
import Header from "./_components/Header";
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import CustomCard from './_components/Card';

export default function Home() {
  React.useEffect(() => {
    AOS.init({
      duration: 1000, 
      once: true,
    });
  }, []);

  return (
    <>
      <Header/>
      <CustomCard/>
    </>
  );
}
