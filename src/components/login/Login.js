import { useEffect } from "react";
import { useFormik } from "formik";
import validationSchema from "./validations1";
import { Modal, Button } from "react-bootstrap";
import { AiOutlineLogin } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { isAdminSelector, loginUser } from "../../redux/loginSlice";
import { useNavigate } from "react-router-dom";

function Login({ handleClose, show }) {
  const isAdmin = useSelector(isAdminSelector);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (isAdmin) {
      navigate("admin");
    }
  }, [isAdmin, navigate]);

  const { handleSubmit, handleChange, handleBlur, values, errors, touched } =
    useFormik({
      initialValues: {
        name: "",
        password: "",
      },
      onSubmit: (values) => {
        console.log("123");
        console.log(values);
        dispatch(loginUser(values));
        values.name = "";
        values.password = "";
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
