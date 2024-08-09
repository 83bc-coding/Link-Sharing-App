import React, { useState } from "react";
import {
  CardContent,
  Typography,
  TextField,
  IconButton,
  Card,
} from "@mui/material";
import LinksSelect from "./LinksSelect";
import DeleteIcon from "@mui/icons-material/Delete";
import { CardType } from "../../../types/CardType";

interface LinkCardProps {
  index: number;
  card: CardType;
  onDelete: (index: number) => void;
  updateCard: (index: number, updatedCard: CardType) => void;
}

const LinkCard: React.FC<LinkCardProps> = ({
  index,
  card,
  onDelete,
  updateCard,
}) => {
  const [link, setLink] = useState(card.link);

  const handleLinkChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newLink = event.target.value;
    setLink(newLink);
    updateCard(index, { ...card, link: newLink });
  };

  return (
    <Card
      variant="outlined"
      sx={{
        margin: "16px",
        padding: "16px",
        backgroundColor: "#FAFAFA",
        width: "90%",
        height: "200px",
      }}
    >
      <Typography
        variant="h6"
        component="div"
        display="flex"
        alignItems="center"
        justifyContent="space-between"
      >
        Link #{index + 1}
        <IconButton onClick={() => onDelete(index)} size="small">
          <DeleteIcon />
        </IconButton>
      </Typography>
      <CardContent>
        <Typography variant="caption">Platform</Typography>
        <LinksSelect card={card} updateCard={updateCard} index={index} />
        <TextField
          fullWidth
          label="Link"
          variant="outlined"
          name="link"
          value={link}
          onChange={handleLinkChange}
          style={{ marginBottom: "10px" }}
        />
      </CardContent>
    </Card>
  );
};

export default LinkCard;