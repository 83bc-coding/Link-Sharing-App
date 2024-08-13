import { Box, FormControl, Input, InputLabel } from "@mui/material";
type props = {
  title?: string;
  value?: string;
  disable?: boolean;
  onChange?: any;
};
const InputFiled = ({ title, value, disable, onChange }: props) => {
  return (
    <Box sx={{ height: "30px", width: "70%", marginTop: "40px" }}>
      <FormControl
        variant="standard"
        fullWidth
        disabled={disable}
        color="primary"
      >
        <InputLabel htmlFor="component-simple">{title}</InputLabel>
        <Input id="component-simple" defaultValue={value} onChange={onChange} />
      </FormControl>
    </Box>
  );
};

export default InputFiled;
