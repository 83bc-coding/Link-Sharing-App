import { Alert } from "@mui/material";
 type prop = {
  state: any;
  onClose: any;
  text?:any
};
const Success = ({ state, onClose,text }: prop) => {
  return (
    <>
      {state && (
        <Alert
          severity="success"
          onClose={() => {
            onClose(!state);
          }}
        >
{text}
        </Alert>
      )}
    </>
  );
};

export default Success;
