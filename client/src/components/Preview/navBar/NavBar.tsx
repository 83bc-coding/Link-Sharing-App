import { Box } from "@mui/system";
import ButtonUi from "../../../ui/ButtonUi";
import { useNavigate } from "react-router-dom";

const NavBar = () => {
const navigate= useNavigate()
  const copyUrlToClipboard = () => {
    const currentUrl = window.location.href;
    navigator.clipboard.writeText(currentUrl);
    alert("URL copied to clipboard!");
  };
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
        alignItems: "center",
      }}
    >
      {" "}
      <Box>
        {" "}
        <ButtonUi onClick={()=>navigate('/')}>Back to Editor</ButtonUi>
      </Box>
      <Box>
        {" "}
        <ButtonUi onClick={copyUrlToClipboard} T>
          Share Link
        </ButtonUi>
      </Box>
    </Box>
  );
};

export default NavBar;
