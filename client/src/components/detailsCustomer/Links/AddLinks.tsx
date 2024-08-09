import { Box, Button } from "@mui/material";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import { CardType } from "../../../types/CardType";

interface AddLinksProps {
  addCard: (card: CardType) => void;
  disabled: boolean;
}

const AddLinks = ({ addCard, disabled }: AddLinksProps): React.ReactElement => {
  const handleAddCard = () => {
    const newCard: CardType = {
      id: crypto.randomUUID(),
      platform: "Github",
      link: "https://example.com",
    };
    addCard(newCard);
  };

  return (
    <Box display="flex" justifyContent="center" width={"100%"} my={4} ml={2}>
      <Button
        variant="contained"
        onClick={handleAddCard}
        sx={{
          width: "100%",
          height: "50px",
          fontWeight: "bold",
          backgroundColor: "#fff",
          ":hover": {
            backgroundColor: "rgb(99 60 255 /0.1)",
            borderColor: "rgb(99 60 255 /1)",
          },
          color: "rgb(99 60 255 /1)",
          borderWidth: "3px",
          borderColor: "rgb(99 60 255 /1)",
          padding: "10px 15px",
          margin: "auto",

          borderRadius: "7px",
        }}
        disabled={disabled}
      >
        <AddCircleIcon sx={{ marginRight: "9px" }} />
        Add Link
      </Button>
    </Box>
  );
};

export default AddLinks;
