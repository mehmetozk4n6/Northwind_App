import { useFormik } from "formik";
import validationSchemar from "./validationsr";
import { Modal, Button } from "react-bootstrap";
import { FaUserAlt } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { register } from "../../redux/loginSlice";

function Register({ handleClose, show }) {
  const dispatch = useDispatch();
  const { handleSubmit, handleChange, handleBlur, values, errors, touched } =
    useFormik({
      initialValues: {
        namer: "",
        emailr: "",
        passwordr: "",
        passwordConfirmr: "",
      },
      onSubmit: (values) => {
        dispatch(register(values));
        values.namer = "";
        values.emailr = "";
        values.passwordr = "";
        values.passwordConfirmr = "";
        handleClose();
      },
      validationSchema: validationSchemar,
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
            <label htmlFor="namer">Name</label>
            <input
              name="namer"
              id="namer"
              value={values.namer}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="Name"
              className="ps-2"
            />
            {errors.namer && touched.namer && (
              <div className="error">{errors.namer}</div>
            )}

            <br />
            <label htmlFor="emailr">Email</label>
            <input
              name="emailr"
              id="emailr"
              value={values.emailr}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="email"
              className="ps-2"
            />
            {errors.emailr && touched.emailr && (
              <div className="error">{errors.emailr}</div>
            )}

            <br />
            <label htmlFor="passwordr">Password</label>
            <input
              type="password"
              name="passwordr"
              id="passwordr"
              value={values.passwordr}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="password"
              className="ps-2"
            />
            {errors.passwordr && touched.passwordr && (
              <div className="error">{errors.passwordr}</div>
            )}

            <br />
            <label htmlFor="passwordConfirmr">Password Confirm</label>
            <input
              type="password"
              name="passwordConfirmr"
              id="passwordConfirmr"
              value={values.passwordConfirmr}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="Password Confirm"
              className="ps-2"
            />
            {errors.passwordConfirmr && touched.passwordConfirmr && (
              <div className="error">{errors.passwordConfirmr}</div>
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
