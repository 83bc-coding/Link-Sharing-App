import { Box } from "@mui/material";
import ButtonUi from "../../ui/ButtonUi";
import { updateLinks } from "../qurey/updateLinks";
import { UserContext, UserContextValue } from "../../Context/userContext";
import { useContext } from "react";
import { CardContext, CardContextValue } from "../../Context/LinksContext";

export const HandelSave = () => {
  const { user } = useContext(UserContext) as UserContextValue;
  const { cards } = useContext(CardContext) as CardContextValue;

  const handale = async () => {
    updateLinks(user?._id, cards);
  };

  return (
    <Box
      sx={{
        height: "60px",
        width: "90%",

        margin: "20px auto 0",

        position: "fixed",
        top: "92%",
        right: "0px",
        left: "75%",
      }}
    >
      {user && (
        <ButtonUi onClick={handale} T>
          SAVE
        </ButtonUi>
      )}
    </Box>
  );
};
