import { Box } from "@mui/system";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

const Whatsapp = () => {
  return (
    <Box
      sx={{
        height: "50px",
        width: "100%",
        backgroundColor: "#128C7E",
        borderRadius: "10px",
        color: "white",
        display: "flex",
        justifyContent: "left",
        alignItems: "center",
        marginTop: "10px",
      }}
    >
      <WhatsAppIcon sx={{ margin: "  15px" }} />
      WhatsApp
    </Box>
  );
};

export default Whatsapp;
