import { Alert } from "@mui/material";
 type prop = {
  state: any;
  onClose: any;
  text?:string;
};
const Error = ({ state, onClose,text }: prop) => {
  return (
    <>
      {state && (
        <Alert
          severity="error"
          onClose={() => {
            onClose(!state);
          }}
        >
{text}        </Alert>
      )}
    </>
  );
};

export default Error;
