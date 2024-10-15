"use client";
import * as React from "react";
import Header from "./_components/Header";
import AOS from "aos";
import "aos/dist/aos.css";
import CustomCard from "./_components/Card";
import { Box, Typography } from "@mui/material";

export default function Home() {
  React.useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <>
      <Header />
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          margin: "2rem",
        }}
      >
        <CustomCard />
        <CustomCard />
        <CustomCard />
        {/* <CustomCard />
        <CustomCard />
        <CustomCard /> */}

      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          margin: "2rem",
        }}
      >
        <Typography variant="h5">Sorry for in convience.</Typography>
        <Typography variant="h3">We update aur product in some days </Typography>
        </Box>
    </>
  );
}
