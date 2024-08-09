import { Typography } from "@mui/material";
import { useFormik } from "formik";
import { useContext, useState } from "react";
import { loginSchema } from "../../types/schema/customer";
import FormLogin from "./FormLogin";
import Success from "../Alert/Success";
import Error from "../Alert/Error";
import ButtonUi from "../../ui/ButtonUi";
import axios from "axios";
import { useNavigate } from "react-router";
import { CardContext, CardContextValue } from "../../Context/LinksContext";

const ConnectedLogin = () => {
  const { addCard } = useContext(CardContext) as CardContextValue;
  const navigate = useNavigate();

  const [success, setuccess] = useState(false);
  const [error, setError] = useState(false);
  const loginTransction = async (data: any) => {
    axios
      .post("http://localhost:5000/api/users/login", data)
      .then((res) => {
        const { data } = res;
        console.log("fy", data);
        if (data?.links) {
          // Add the links from the database to the CardContext
          addCard(data.links);
        }

        setuccess(true);
      })
      .catch((erroe) => {
        return setError(true);
      });
  };
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: loginSchema,
    onSubmit: (values) => {
      loginTransction(values);
      navigate("/");
      console.log(values);
    },
  });
  return (
    <>
      <Success state={success} onClose={setuccess} text="Login Successful" />
      <Error
        state={error}
        onClose={setError}
        text="Invalid email or password."
      />
      <FormLogin formik={formik}>
        <ButtonUi onClick={formik.handleSubmit} T>
          Login
        </ButtonUi>

        <Typography variant="body2" sx={{ marginTop: "20px" }}>
          Don’t have an account?<a href="/register">Create account</a>
        </Typography>
      </FormLogin>
    </>
  );
};

export default ConnectedLogin;
