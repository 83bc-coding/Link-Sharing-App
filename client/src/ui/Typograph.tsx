 import { Typography } from '@mui/material'
import { TypographType } from '../types/Typograph'
 
const Typograph = ({text}:TypographType) => {
  return (
    <Typography variant='caption' gutterBottom sx={{opacity:'0.8', marginTop:'10px'}}>
    {text}{" "}
  </Typography>
  )
}

export default Typograph