import { Typography } from "@mui/material";
import { Box } from "@mui/system";
 type props = {
  firstName: string;
  lastName: string;
  email: string;
};
const TypoInformation = ({ firstName, email,lastName }: props) => {
  return (
    <Box
      sx={{
 
        position: "absolute",
        top: "200px",
        width: "50%",
        textAlign: "center"
      }}
    >
      <Typography
        variant="h4"
        sx={{ textAlign: "center", fontWeight: "bold" }}
        gutterBottom
      >
        {firstName}  {lastName}
      </Typography>
      <Typography
        variant="subtitle1"
        sx={{ textAlign: "center", opacity: "0.7" }}
        gutterBottom
      >
        {email}{" "}
      </Typography>
    </Box>
  );
};

export default TypoInformation;
