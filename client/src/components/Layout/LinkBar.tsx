import { CardType } from "../../types/CardType";
import Github from "../LinksBarDesign/Github";
import LinkedIn from "../LinksBarDesign/LinkedIn";
import Facebook from "../LinksBarDesign/Facebook";
import Instagram from "../LinksBarDesign/Instagram";
import Whatsapp from "../LinksBarDesign/Whatsapp";
import { Link } from "react-router-dom";
interface props {
  card: CardType;
}
const LinkBar = ({ card }: props) => {
  const getIcon = () => {
    switch (card.platform) {
      case "Github":
        return (
          <Link to={card?.link} target="_blank" rel="noopener noreferrer">
            <Github />
          </Link>
        );
      case "LinkedIn":
        return (
          <Link to={card?.link} target="_blank" rel="noopener noreferrer">
            <LinkedIn />{" "}
          </Link>
        );
      case "Facebook":
        return (
          <Link to={card?.link} target="_blank" rel="noopener noreferrer">
            {" "}
            <Facebook />
          </Link>
        );
      case "Instagram":
        return (
          <Link to={card?.link} target="_blank" rel="noopener noreferrer">
            <Instagram />
          </Link>
        );
      case "Whatsapp":
        return (
          <Link to={card?.link} target="_blank" rel="noopener noreferrer">
            <Whatsapp />
          </Link>
        );
      default:
        return null;
    }
  };

  return <>{getIcon()}</>;
};

export default LinkBar;
