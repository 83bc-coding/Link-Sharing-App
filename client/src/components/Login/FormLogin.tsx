 import { ReactNode, } from "react";
 
import Login from "./Login";
import Input from "../../ui/Input";
type prop = {
  formik: any;
  children?: ReactNode;
};
const FormLogin = ({ formik, children }: prop) => {
  return (
    <Login>
      <Input
        title="Email"
        touched={formik.touched.email}
        errors={formik.errors.email}
        onChange={formik.handleChange("email")}
        onBlur={formik.handleBlur("email")}
        placeholder={"Abdo"}
        name="email"
        value={formik.values.email}
      />
      <Input
        title="Password"
        touched={formik.touched.password}
        errors={formik.errors.password}
        onChange={formik.handleChange("password")}
        onBlur={formik.handleBlur("password")}
        placeholder={"***"}
        name="password"
        value={formik.values.password}
      />

      {children}
    </Login>
  );
};

export default FormLogin;
