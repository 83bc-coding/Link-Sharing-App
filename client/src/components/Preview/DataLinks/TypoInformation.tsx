import { Typography } from "@mui/material";
import { Box } from "@mui/system";
 type props = {
  name: string;
  email: string;
};
const TypoInformation = ({ name, email }: props) => {
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
        {name}
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
