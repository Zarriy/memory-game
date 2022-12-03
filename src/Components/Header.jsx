import Box from "@mui/material/Box";
import { useContext } from "react";
import { customCtx } from "./../context";

function Header() {
  const { score, bestScore } = useContext(customCtx);
  return (
    <Box
      sx={{
        height: "80px",
        backgroundColor: "#4361ee",
        width: "100vw",
        borderRadius: "none",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-evenly",
      }}
    >
      <div>Memory Game</div>
      <Box
        sx={{
          height: "40px",
          backgroundColor: "#4CC9F0",
          width: "180px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "22px",
          fontWeight: "600",
          borderRadius: "4px",
        }}
      >
        Current Score: {score}
      </Box>
      <Box
        sx={{
          height: "40px",
          backgroundColor: "#9775fa",
          width: "180px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "22px",
          fontWeight: "600",
          borderRadius: "4px",
        }}
      >
        Best Score: {bestScore}
      </Box>
    </Box>
  );
}

export default Header;
