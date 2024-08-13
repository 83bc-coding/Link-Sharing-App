import { Box } from "@mui/system";
 import Whatsapp from "../../LinksBarDesign/Whatsapp";

const ListLinks = () => {
  return (
    <Box
      sx={{
         width: "60%",
        position:'absolute',
        top:'350px',
        marginX:"auto",
        height:'auto'
      }}
    >
  <Whatsapp />
  <Whatsapp />
  <Whatsapp />
  <Whatsapp />
    </Box>
  );
};

export default ListLinks;
