import { Box, CircularProgress } from "@mui/material";
import ProfileLayout from "../Layout/mobile";
import Taps from "../Tab/Taps";
import { useContext } from "react";
import { UserContext, UserContextValue } from "../../Context/userContext";
 
const DetailsCustomer = () => {
  const { user } = useContext(UserContext) as UserContextValue;

  return (
    <>
      <Box
        sx={{
          height: "700px",
          width: "100%",
          marginTop: "50px",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        {user ? (
          <>
            {" "}
            <ProfileLayout />
            <Taps />{" "}
          </>
        ) : (
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "100%",
            }}
          >
            <CircularProgress />
          </Box>
        )}
      </Box>
    </>
  );
};

export default DetailsCustomer;
