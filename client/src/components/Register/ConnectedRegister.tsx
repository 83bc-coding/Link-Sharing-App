import { useFormik } from "formik";
import { registerSchema } from "../../types/schema/customer";
import FormRegister from "./FormRegister";
import ButtonUi from "../../ui/ButtonUi";
import { Typography } from "@mui/material";
import { useState } from "react";
import Success from "../Alert/Success";
import Error from "../Alert/Error";
import { useNavigate } from "react-router";
import { registerTransction } from "../qurey/registerTRsnsction";

const ConnectedRegister = () => {
  const [success, setuccess] = useState(false);
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      firstName: "",
      lastName: "",
    },
    validationSchema: registerSchema,
    onSubmit: (values) => {
      registerTransction(values);

      navigate("/login");
    },
  });
  return (
    <>
      <Success
        state={success}
        onClose={setuccess}
        text={"Register Successful"}
      />
      <Error
        state={error}
        onClose={setError}
        text="User Already Exists or Try Agine"
      />
      <FormRegister formik={formik}>
        <ButtonUi T onClick={formik.handleSubmit}>
          Create new account
        </ButtonUi>

        <Typography variant="body2" sx={{ marginTop: "20px" }}>
          Already have an account?<a href="/login">Log in</a>
        </Typography>
      </FormRegister>
    </>
  );
};

export default ConnectedRegister;
