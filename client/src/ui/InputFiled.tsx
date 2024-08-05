import { Box, FormControl, Input, InputLabel } from '@mui/material'
 type props ={
    title?:string;
    value?:string;
    disable?:boolean;
 }
const InputFiled = ({title,value,disable}:props) => {
  return (
   <Box sx={{height:'30px',
    width:'70%',
    marginTop:'40px'
 

   }}>
 <FormControl variant="standard" fullWidth disabled={disable} color="primary">
        <InputLabel htmlFor="component-simple">{title}</InputLabel>
        <Input id="component-simple" defaultValue={value} />
      </FormControl>
   </Box>
  )
}

export default InputFiled