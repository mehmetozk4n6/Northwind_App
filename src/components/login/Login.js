import { useFormik } from "formik";
import validationSchema from "./validations";
import { Modal, Button } from "react-bootstrap";
import { AiOutlineLogin } from "react-icons/ai";

function Login({ handleClose, show }) {
  const { handleSubmit, handleChange, handleBlur, values, errors, touched } =
    useFormik({
      initialValues: {
        name: "",
        email: "",
        password: "",
        passwordConfirm: "",
      },
      onSubmit: (values) => {
        console.log(values);
        values.name = "";
        values.email = "";
        values.password = "";
        values.passwordConfirm = "";

        handleClose();
      },
      validationSchema,
    });
  return (
    <div>
      <Modal show={show} onHide={handleClose}>
        <form onSubmit={handleSubmit}>
          <Modal.Header closeButton>
            <Modal.Title>
              <>
                <AiOutlineLogin size="1.5em" />
                <span> User Login</span>
              </>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body className="d-flex flex-column justify-content-center align-items-center modalAddEdit">
            <label htmlFor="name">Name</label>
            <input
              name="name"
              id="name"
              value={values.name}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="Name"
              className="ps-2"
            />
            {errors.name && touched.name && (
              <div className="error">{errors.name}</div>
            )}

            <br />
            <label htmlFor="email">Email</label>
            <input
              name="email"
              id="email"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="email"
              className="ps-2"
            />
            {errors.email && touched.email && (
              <div className="error">{errors.email}</div>
            )}

            <br />
            <label htmlFor="password">Password</label>
            <input
              name="password"
              id="password"
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="password"
              className="ps-2"
            />
            {errors.password && touched.password && (
              <div className="error">{errors.password}</div>
            )}

            <br />
            <label htmlFor="passwordConfirm">Password Confirm</label>
            <input
              name="passwordConfirm"
              id="passwordConfirm"
              value={values.passwordConfirm}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="Password Confirm"
              className="ps-2"
            />
            {errors.passwordConfirm && touched.passwordConfirm && (
              <div className="error">{errors.passwordConfirm}</div>
            )}

            <br />
          </Modal.Body>
          <Modal.Footer>
            <Button variant="success" type="submit">
              Login
            </Button>
          </Modal.Footer>
        </form>
      </Modal>
    </div>
  );
}

export default Login;
