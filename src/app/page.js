"use client";
import * as React from "react";
import Header from "./_components/Header";
import AOS from "aos";
import "aos/dist/aos.css";
import CustomCard from "./_components/Card";
import { Box, Typography } from "@mui/material";
import { data } from "./data/data";

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
          justifyContent: "space-around",
          alignItems: "center",
          flexWrap: "wrap",
          margin: "2rem",
        }}
      >
        {data &&
          data.map((item) => (
            // Custom card
            <CustomCard key={item.id} data={item} />
          ))}
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
        <Typography variant="h3">
          We update aur product in some days{" "}
        </Typography>
      </Box>
    </>
  );
}
