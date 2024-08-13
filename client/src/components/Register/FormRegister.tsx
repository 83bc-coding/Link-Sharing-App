 import Register from "./Register";
 import Input from "../../ui/Input";
 import { ReactNode } from "react";
type prop ={
  formik:any;
  children?: ReactNode;

}
const FormRegister = ({formik,children}:prop) => {

  return (
    <Register>
      <Input
        title="Name"
        touched={formik.touched.firstName}
        errors={formik.errors.firstName}
        onChange={formik.handleChange("firstName")}
        onBlur={formik.handleBlur("firstName")}
        placeholder={"Alexa"}
        name="firstName"
        value={formik.values.firstName}
      />
      <Input
        title="Last Name"
        touched={formik.touched.lastName}
        errors={formik.errors.lastName}
        onChange={formik.handleChange("lastName")}
        onBlur={formik.handleBlur("lastName")}
        placeholder={"Abdo"}
        name="lastName"
        value={formik.values.lastName}
      />
      <Input
        title="Email"
        touched={formik.touched.email}
        errors={formik.errors.email}
        onChange={formik.handleChange("email")}
        onBlur={formik.handleBlur("email")}
        placeholder={"audo@mail.com"}
        name="email"
        value={formik.values.email}
      />

      <Input
        title="Password"
        touched={formik.touched.password}
        errors={formik.errors.password}
        onChange={formik.handleChange("password")}
        onBlur={formik.handleBlur("password")}
        placeholder={"******"}
        name="password"
        value={formik.values.password}
      />
      {children}
    </Register>
  );
};

export default FormRegister;
