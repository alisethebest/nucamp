import React from "react";
import { Col, Row, Label } from "reactstrap";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { validateContactForm } from "../utils/validateContactForm"; // make sure the path is correct

const ContactForm = () => {
  const handleSubmit = (values) => {
    console.log("Submitted values:", values);
    // Handle form submission logic here
  };

  return (
    <Formik
      initialValues={{
        firstName: "",
        lastName: "",
        phoneNum: "",
        email: "",
        agree: false,
        contactType: "By Phone",
        feedback: "",
      }}
      onSubmit={handleSubmit}
      validate={validateContactForm}
    >
      {() => (
        <Form>
          <Row className="form-group">
            <Label htmlFor="firstName" md={2}>
              First Name
            </Label>
            <Col md={10}>
              <Field
                className="form-control"
                name="firstName"
                placeholder="First Name"
              />
              <ErrorMessage name="firstName">
                {(msg) => <p className="text-danger">{msg}</p>}
              </ErrorMessage>
            </Col>
          </Row>
          <Row className="form-group">
            <Label htmlFor="lastName" md={2}>
              Last Name
            </Label>
            <Col md={10}>
              <Field
                className="form-control"
                name="lastName"
                placeholder="Last Name"
              />
              <ErrorMessage name="lastName">
                {(msg) => <p className="text-danger">{msg}</p>}
              </ErrorMessage>
            </Col>
          </Row>
          <Row className="form-group">
            <Label htmlFor="phoneNum" md={2}>
              Phone
            </Label>
            <Col md={10}>
              <Field
                className="form-control"
                name="phoneNum"
                placeholder="Phone"
              />
              <ErrorMessage name="phoneNum">
                {(msg) => <p className="text-danger">{msg}</p>}
              </ErrorMessage>
            </Col>
          </Row>
          <Row className="form-group">
            <Label htmlFor="email" md={2}>
              Email
            </Label>
            <Col md={10}>
              <Field
                className="form-control"
                name="email"
                placeholder="Email"
              />
              <ErrorMessage name="email">
                {(msg) => <p className="text-danger">{msg}</p>}
              </ErrorMessage>
            </Col>
          </Row>
          <Row className="form-group">
            <Label check md={{ size: 4, offset: 2 }}>
              <Field
                name="agree"
                type="checkbox"
                className="form-check-input"
              />{" "}
              May we contact you?
            </Label>
            <Col md={{ size: 3, offset: 1 }}>
              <Field as="select" className="form-control" name="contactType">
                <option>By Phone</option>
                <option>By Email</option>
              </Field>
            </Col>
          </Row>
          <Row className="form-group">
            <Label htmlFor="feedback" md={2}>
              Your Feedback
            </Label>
            <Col md={10}>
              <Field
                as="textarea"
                rows="12"
                className="form-control"
                name="feedback"
              />
            </Col>
          </Row>
          <Row className="form-group">
            <Col md={{ size: 10, offset: 2 }}>
              <button type="submit" className="btn btn-primary">
                Send Feedback
              </button>
            </Col>
          </Row>
        </Form>
      )}
    </Formik>
  );
};

export default ContactForm;
