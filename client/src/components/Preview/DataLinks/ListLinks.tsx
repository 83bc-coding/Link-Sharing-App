import { Box } from "@mui/system";
import { useContext } from "react";
import {
  CardContextPreview,
  CardContextValuePreview,
} from "../../../Context/preview/linksContextPreview";
import LinkBar from "../../Layout/LinkBar";

const ListLinks = () => {
  const { links } = useContext(CardContextPreview) as CardContextValuePreview;
  return (
    <Box
      sx={{
        width: "60%",
        position: "absolute",
        top: "350px",
        marginX: "auto",
        height: "auto",
      }}
    >
      <>
        {links.map((card, index) => (
          <LinkBar card={card} key={index} />
        ))}
      </>
    </Box>
  );
};

export default ListLinks;
