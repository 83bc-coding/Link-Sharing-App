import { Select, MenuItem, SelectChangeEvent } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { useState } from "react";
import { CardType } from "../../../types/CardType";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import { menuItemStyles } from "../../Design/menuItemStyles";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
interface LinksSelectProps {
  index: number;
  card: CardType;
  updateCard: (index: number, updatedCard: CardType) => void;
}

const LinksSelect = ({ card, updateCard, index }: LinksSelectProps) => {
  const [selectedPlatform, setSelectedPlatform] = useState<string>(
    card.platform
  );

  const handleChange = (event: SelectChangeEvent<string>) => {
    const newPlatform = event.target.value;
    setSelectedPlatform(newPlatform);
    updateCard(index, { ...card, platform: newPlatform });
  };

  return (
    <Select
      name="platform"
      value={selectedPlatform}
      onChange={handleChange}
      variant="outlined"
      style={{ width: "100%", marginBottom: "16px", backgroundColor: "#fff" }}
    >
      <MenuItem value="Github" sx={menuItemStyles}>
        <GitHubIcon sx={{ fontSize: "30px" }} /> Github
      </MenuItem>
      <MenuItem value="LinkedIn" sx={menuItemStyles}>
        <LinkedInIcon sx={{ color: "#0072B1", fontSize: "30px" }} /> LinkedIn
      </MenuItem>
      <MenuItem value="Facebook" sx={menuItemStyles}>
        <FacebookIcon sx={{ color: "#0072B1", fontSize: "30px" }} /> Facebook
      </MenuItem>
      <MenuItem value="Whatsapp" sx={menuItemStyles}>
        <WhatsAppIcon sx={{ color: "#128C7E", fontSize: "30px" }} /> Whatsapp
      </MenuItem>
      <MenuItem value="Instagram" sx={menuItemStyles}>
        <InstagramIcon
          sx={{
            color: "#833ab4",
            fontSize: "30px",
          }}
        />
        Instagram
      </MenuItem>
    </Select>
  );
};

export default LinksSelect;
