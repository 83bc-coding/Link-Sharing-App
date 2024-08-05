import { Box, Typography } from "@mui/material";
import {TitleType} from "../types/Title";

const Title = ({ title, description }: TitleType) => {
  return (
    <Box sx={{ fontWeight: "bold", opacity: "0.8" }}>
      {" "}
      <Typography variant="h4" gutterBottom>
        {title}
      </Typography>
      <Typography variant="body1" gutterBottom>
        {description}{" "}
      </Typography>
    </Box>
  );
};

export default Title;
