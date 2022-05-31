import { useFormik } from "formik";
import validationSchema from "./validations";
import { Modal, Button } from "react-bootstrap";
import moment from "moment";

function Login({ handleClose, show }) {
  const { handleSubmit, handleChange, handleBlur, values, errors, touched } =
    useFormik({
      initialValues: {
        name: "",
        adress: "",
        openingTime: "",
        closingTime: "",
      },
      onSubmit: (values) => {
        values.openingTime = Date.parse(`01 Jan 1970 ${values.openingTime}:00`);
        values.closingTime = Date.parse(`01 Jan 1970 ${values.closingTime}:00`);
        console.log(values);
        values.name = "";
        values.adress = "";
        values.openingTime = moment(Date.now()).format("HH:mm");
        values.closingTime = moment(Date.now).format("HH:mm");
        handleClose();
      },
      validationSchema,
    });
  return (
    <div>
      <Modal show={show} onHide={handleClose}>
        <form onSubmit={handleSubmit}>
          <Modal.Header closeButton>
            <Modal.Title>Add New Location</Modal.Title>
          </Modal.Header>
          <Modal.Body className="d-flex flex-column justify-content-center align-items-start modalAddEdit">
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
            <br />

            <input
              name="adress"
              id="adress"
              value={values.adress}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="Address"
              className="ps-2"
            />
            {errors.adress && touched.adress && (
              <div className="error">{errors.adress}</div>
            )}
            <br />
            <br />
            <label htmlFor="openingTime">Opening Time</label>
            <input
              name="openingTime"
              id="openingTime"
              type="time"
              value={values.openingTime}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="Opening Time"
              className="ps-2"
            />

            <br />
            <br />
            <label htmlFor="closingTime">Closing Time</label>
            <input
              name="closingTime"
              id="closingTime"
              type="time"
              value={values.closingTime}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="Closing Time"
              className="ps-2"
            />

            <br />
            <br />
          </Modal.Body>
          <Modal.Footer>
            <Button variant="danger" type="submit">
              Save
            </Button>
          </Modal.Footer>
        </form>
      </Modal>
    </div>
  );
}

export default Login;
