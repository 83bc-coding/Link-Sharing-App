import { Box } from "@mui/system";
import ButtonUi from "../../../ui/ButtonUi";
 

const NavBar = () => {
  return (
    <Box
      component="section"
      sx={{
        p: 2,
        display: "flex",
        justifyContent: "space-between",
        backgroundColor: "white",
        margin: "20px",
        width: "92%",
        height: "80px",
        borderRadius: "15px",
        alignItems:'center'
      }}
    >
      {" "}
      <Box>
        {" "}
        <ButtonUi>Back to Editor</ButtonUi>
      </Box>
      <Box>
        {" "}
        <ButtonUi T>Share Link</ButtonUi>
      </Box>
    </Box>
  );
};

export default NavBar;
