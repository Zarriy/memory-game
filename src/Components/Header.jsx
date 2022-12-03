import Box from "@mui/material/Box";
import { useContext } from "react";
import { customCtx } from "./../context";
import logo from "./../assets/idea.png";
import useMediaQuery from "@mui/material/useMediaQuery";

function Header() {
  const { score, bestScore } = useContext(customCtx);
  const matches = useMediaQuery("(min-width:500px)");
  const value = !matches
    ? {
        flexDirection: "column",
        justifyContent: "center",
        gap: "10px",
        height: "180px",
      }
    : { justifyContent: "space-evenly", height: "80px" };
  return (
    <Box
      sx={{
        backgroundColor: "#4361ee",
        width: "100vw",
        borderRadius: "none",
        display: "flex",
        alignItems: "center",
        ...value,
      }}
    >
      <div>
        <img src={logo} height="50px" />
      </div>
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
