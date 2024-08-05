 import { Box } from "@mui/material"
import DetailsCustomer from "./components/detailsCustomer/DetailsCustomer"
import NavBar from "./components/navBar/navBar"

 

function App() { 
  return (
    <Box sx={{backgroundColor:'#e5e7eb'}}>
    <NavBar/>
    <DetailsCustomer/>
 
    </Box>
  )
}

export default App
