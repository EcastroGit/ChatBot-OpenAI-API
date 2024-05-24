import { Box, useMediaQuery, useTheme } from "@mui/material";
import React from "react";
import TypingAnim from "../components/typer/TypingAnim";

const Home = () => {
  const theme = useTheme();
  const isBelowMd = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <Box width={"100%"} height={"100%"}>
      <Box
        sx={{
          display: "flex",
          width: "100%",
          flexDirection: "column",
          alignItems: "center",
          mx: "auto",
          mt: 3,
        }}
      >
        <Box>
          <TypingAnim />
        </Box>
        <Box
          sx={{
            position: "relative",
            width: "100%",
            height: "200px", // Ajusta la altura según sea necesario
          }}
        >
          <img
            className="rotate-slow"
            src="logoP1.png"
            alt="openai"
            style={{
              width: isBelowMd ? "70px" : "100px",
              position: "absolute",
              top: "50%",
              left: "46%",
              transform: "translate(-50%, -50%)",
            }}
          />
          <img
            className="rotate-medium"
            src="logoP2.png"
            alt="segunda_imagen"
            style={{
              width: isBelowMd ? "70px" : "100px",
              position: "absolute",
              top: "50%",
              left: "46%",
              transform: "translate(-50%, -50%)",
            }}
          />
          <img
            className="rotate-fast"
            src="logoP3.png"
            alt="tercera_imagen"
            style={{
              width: isBelowMd ? "70px" : "100px",
              position: "absolute",
              top: "50%",
              left: "46%",
              transform: "translate(-50%, -50%)",
            }}
          />
        </Box>
      </Box>
      <Box sx={{ display: "flex", mx: "auto" }}>
        <img
          src="chat.png"
          alt="chatbot"
          style={{
            display: "flex",
            margin: "auto",
            width: isBelowMd ? "80%" : "60%",
            borderRadius: 20,
            boxShadow: "-3px -3px 25px #64f3d5",
            marginTop: 20,
            marginBottom: 20,
            padding: 10,
          }}
        />
      </Box>
    </Box>
  );
};

export default Home;
