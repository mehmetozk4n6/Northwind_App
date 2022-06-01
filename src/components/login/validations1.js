import * as yup from "yup";

const validations = yup.object().shape({
  name: yup.string().required("zorunlu alan"),
  password: yup.string().min(5).required(),
});

export default validations;
