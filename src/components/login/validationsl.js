import * as yup from "yup";

// password must be changed

const validationsl = yup.object().shape({
  namel: yup
    .string()
    .min(2, "Too Short!")
    .max(20, "Too Long!")
    .required("Required"),
  passwordl: yup.string().min(5).required("Required"),
});

export default validationsl;
