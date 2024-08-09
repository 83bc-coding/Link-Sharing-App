import { Box, TextField, Typography } from "@mui/material";
 type prop = {
  name: string;
  value: any;
  onChange: any;
  onBlur: any;
  touched: any;
  errors: any;
  title:string;
  placeholder:any;
};
const Input = ({placeholder, errors, touched, onBlur, onChange, value, name,title }: prop) => {
  return (
    <Box sx={{ width: { md: "90%", sm: "90%" }, margin: "20px auto" }}>
      <Box>
        <Typography variant="body1">{title}</Typography>
        <TextField
          name={name}
          type={name}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          sx={{
            marginLeft: "3px",
             color: "black",
            fontSize: "1rem",
            borderRadius: "5px",
             fontWeight: "700",
            letterSpacing: "-0.025rem",
            outline: `3px solid ${touched && errors ? "red" : "rgb(99 60 255 /1)"}`,
             width: "100%",
            margin: "auto",
          }}
        />
      </Box>
      <Box sx={{ color: "red", fontSize: "13px", textAlign: "right",marginTop:'5px' }}>
        {touched && errors}
      </Box>
    </Box>
  );
};

export default Input;
