import { Box } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import { CardType } from "../../types/CardType";
import Github from "../LinksBarDesign/Github";
import LinkedIn from "../LinksBarDesign/LinkedIn";
import Facebook from "../LinksBarDesign/Facebook";
import Instagram from "../LinksBarDesign/Instagram";
import Whatsapp from "../LinksBarDesign/Whatsapp";
interface props {
  card: CardType;
}
const LinkBar = ({ card }: props) => {
  const getIcon = () => {
    switch (card.platform) {
      case "Github":
        return <Github />;
      case "LinkedIn":
        return <LinkedIn />;
      case "Facebook":
        return <Facebook />;
      case "Instagram":
        return <Instagram />;
      case "Whatsapp":
        return <Whatsapp />;
      default:
        return null;
    }
  };

  return <>{getIcon()}</>;
};

export default LinkBar;
