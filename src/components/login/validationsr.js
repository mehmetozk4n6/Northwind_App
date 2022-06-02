import * as yup from "yup";

const validationsr = yup.object().shape({
  namer: yup.string().required("zorunlu alan"),
  emailr: yup.string().email().required(),
  passwordr: yup.string().min(5).required(),
  passwordConfirmr: yup
    .string()
    .oneOf([yup.ref("password")])
    .required(),
});

export default validationsr;
