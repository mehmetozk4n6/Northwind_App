import * as yup from "yup";

const validations = yup.object().shape({
  name: yup.string().required("zorunlu alan"),
  adress: yup.string().required("zorunlu alan"),
  openingTime: yup.string(),
  closingTime: yup.string(),
});

export default validations;
