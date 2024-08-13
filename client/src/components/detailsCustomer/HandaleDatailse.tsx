import { Box } from "@mui/material";
import ButtonUi from "../../ui/ButtonUi";
import { UserContext, UserContextValue } from "../../Context/userContext";
import { useContext } from "react";

import { updateUser } from "../qurey/updateUser";

const HandaleDatailse = () => {
  const { user } = useContext(UserContext) as UserContextValue;

  const handale = async () => {
    const data = await updateUser(user);
    // loginTransaction(user?._id)
    console.log(data, "im handedatailse save ");
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
          daitalse
        </ButtonUi>
      )}
    </Box>
  );
};

export default HandaleDatailse;
