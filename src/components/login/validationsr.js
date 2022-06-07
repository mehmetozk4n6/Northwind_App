import * as yup from "yup";

const validationsr = yup.object().shape({
  namer: yup
    .string()
    .min(2, "Too Short!")
    .max(20, "Too Long!")
    .required("Required"),
  emailr: yup.string().email("Invalid email").required("Required"),
  passwordr: yup
    .string()
    .required("Please Enter your password")
    .matches(
      "^(?=.*[A-Za-z])(?=.*d)(?=.*[@$!%*#?&])[A-Za-zd@$!%*#?&]{8,}$",
      "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character"
    ),
  passwordConfirmr: yup
    .string()
    .required("Please type Password Again")
    .oneOf([yup.ref("passwordr"), null], "Passwords must match"),
});

export default validationsr;
