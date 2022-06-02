import { useFormik } from "formik";
import validationSchemal from "./validationsl";
import { Modal, Button } from "react-bootstrap";
import { AiOutlineLogin } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { loginUser } from "../../redux/loginSlice";

function Login({ handleClose, show }) {
  const dispatch = useDispatch();

  const { handleSubmit, handleChange, handleBlur, values, errors, touched } =
    useFormik({
      initialValues: {
        namel: "",
        passwordl: "",
      },
      onSubmit: (values) => {
        dispatch(loginUser(values));
        values.namel = "";
        values.passwordl = "";
        handleClose();
      },
      validationSchemal,
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
            <label htmlFor="namel">Name</label>
            <input
              name="namel"
              id="namel"
              value={values.namel}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="Name"
              className="ps-2"
            />
            {errors.namel && touched.namel && (
              <div className="error">{errors.namel}</div>
            )}

            <br />
            <label htmlFor="passwordl">Password</label>
            <input
              type="password"
              name="passwordl"
              id="passwordl"
              value={values.passwordl}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="password"
              className="ps-2"
            />
            {errors.passwordl && touched.passwordl && (
              <div className="error">{errors.passwordl}</div>
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
