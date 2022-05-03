import React from "react";
import { Button, Form, FormControl } from "react-bootstrap";
import "./FooterTop.css";

const FooterTop = () => {
  return (
    <div className="text-center background-color p-5 mt-5 mb-5">
      <Form className="d-flex w-50 mx-auto">
        <FormControl
          type="email"
          placeholder="Type Your Email  "
          className="me-2"
          aria-label="email"
        />
        <Button variant="outline-success">Subscrip</Button>
      </Form>
    </div>
  );
};

export default FooterTop;
