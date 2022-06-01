import { useFormik } from "formik";
import validationSchema from "./validations";
import { Modal, Button } from "react-bootstrap";
import { FaUserAlt } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { register } from "../../redux/loginSlice";

function Register({ handleClose, show }) {
  const dispatch = useDispatch();
  const { handleSubmit, handleChange, handleBlur, values, errors, touched } =
    useFormik({
      initialValues: {
        name: "",
        email: "",
        password: "",
        passwordConfirm: "",
      },
      onSubmit: (values) => {
        dispatch(register(values));
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
                <FaUserAlt size="1.5em" />
                <span> User Register</span>
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
              type="password"
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
              type="password"
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
              Register
            </Button>
          </Modal.Footer>
        </form>
      </Modal>
    </div>
  );
}

export default Register;
