import * as yup from "yup";

const validationsl = yup.object().shape({
  namel: yup.string().required("zorunlu alan"),
  passwordl: yup.string().min(5).required(),
});

export default validationsl;
