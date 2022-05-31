import * as yup from "yup";

const validations = yup.object().shape({
  name: yup.string().required("zorunlu alan"),
  email: yup.string().email(),
  password: yup.string().min(5).required(),
  passwordConfirm: yup
    .string()
    .oneOf([yup.ref("password")])
    .required(),
});

export default validations;
