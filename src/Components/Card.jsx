import { Card, CardActionArea } from "@mui/material";
import { useContext } from "react";
import { customCtx } from "./../context";

function ImgCard(props) {
  const { addSelected } = useContext(customCtx);
  return (
    <Card>
      <CardActionArea
        onClick={() => addSelected(props.name)}
        sx={{ maxHeight: "260px", boxShadow: 1 }}
      >
        <img src={props.imgUrl} width="100%" alt={props.name} />
      </CardActionArea>
    </Card>
  );
}
export default ImgCard;
