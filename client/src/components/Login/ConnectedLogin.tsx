import { Typography } from "@mui/material";
import { useFormik } from "formik";
import { loginSchema } from "../../types/schema/customer";
import FormLogin from "./FormLogin";
import ButtonUi from "../../ui/ButtonUi";
import { useNavigate } from "react-router";
import { loginTransaction } from "../qurey/loginTransction";
import { useContext } from "react";
import { UserContext, UserContextValue } from "../../Context/userContext";
import { getLinks } from "../qurey/getLinks";
import { CardContext, CardContextValue } from "../../Context/LinksContext";

const ConnectedLogin = () => {
  const navigate = useNavigate();
  const { addUser } = useContext(UserContext) as UserContextValue;
  const { addCardServer } = useContext(CardContext) as CardContextValue;

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: loginSchema,
    onSubmit: async (values) => {
      const data = await loginTransaction(values);
      addUser(data);
      const links = await getLinks(data?._id);
      addCardServer(links);

      navigate("/");
    },
  });
  return (
    <>
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
