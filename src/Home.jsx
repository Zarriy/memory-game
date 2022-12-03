import { useContext } from "react";
import { customCtx } from "./context";
import Header from "./Components/Header";
import ImgCard from "./Components/Card";
import { Grid } from "@mui/material";

function Home() {
  const { gameData } = useContext(customCtx);
  return (
    <>
      <Header />
      <div className="cardsDiv">
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          {gameData.map((data) => (
            <Grid item xs={2} sm={4} md={3} key={data.id}>
              <ImgCard id={data.id} imgUrl={data.imageUrl} name={data.fullName}>
                {data.fullName}
              </ImgCard>
            </Grid>
          ))}
        </Grid>
      </div>
    </>
  );
}

export default Home;
