import { useFormik } from "formik";
import { registerSchema } from "../../types/schema/customer";
import FormRegister from "./FormRegister";
import ButtonUi from "../../ui/ButtonUi";
import { Typography } from "@mui/material";
import { useState } from "react";
import Success from "../Alert/Success";
import Error from "../Alert/Error";
import axios from "axios";
import { useNavigate } from "react-router";

const ConnectedRegister = () => {
  const [success, setuccess] = useState(false);
  const [error, setError] = useState(false);
  const navigate =useNavigate()
  const registerTransction = (data: any) => {
    axios
      .post("http://localhost:5000/api/users/register", data)
      .then((res) => {
        const data = res;
        console.log(data);
        setuccess(true);
      
      })
      .catch((erroe) => {
       console.log(erroe)
       setError(true)
      });
  };
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      name: "",
      lastName: "",
    },
    validationSchema: registerSchema,
    onSubmit: (values) => {
      registerTransction(values);
      navigate('/login')
      console.log(values);
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
