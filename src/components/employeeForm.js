import React, { useState } from "react";
import { Card, Form, Button } from "react-bootstrap";

const EmployeeForm = () => {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    setValidated(true);
  };

  return (
    <>
      <Card>
        <Card.Body>
          <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <Form.Group controlId="firstName" className="mb-3">
              <Form.Label>First Name *</Form.Label>
              <Form.Control required type="text" placeholder="John" />
              <Form.Control.Feedback type="invalid">
                Please provide a valid first name.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group controlId="lastName" className="mb-3">
              <Form.Label>Last Name</Form.Label>
              <Form.Control type="text" placeholder="Doe" />
            </Form.Group>
            <Form.Group controlId="username" className="mb-3">
              <Form.Label>Username *</Form.Label>
              <Form.Control required type="text" placeholder="johndoe" />
              <Form.Control.Feedback type="invalid">
                Please provide a valid username.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group controlId="email" className="mb-3">
              <Form.Label>Email *</Form.Label>
              <Form.Control required type="email" placeholder="johndoe@example.com" />
              <Form.Control.Feedback type="invalid">
                Please provide a valid email address.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group controlId="password" className="mb-3">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="•••••••" />
            </Form.Group>
            <Form.Group controlId="confirmPassword" className="mb-3">
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control type="password" placeholder="•••••••" />
            </Form.Group>
            <Form.Group controlId="employeeID" className="mb-3">
              <Form.Label>Employee ID *</Form.Label>
              <Form.Control required type="text" placeholder="FT-0001" />
              <Form.Control.Feedback type="invalid">
                Please provide a valid employee ID.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group controlId="joiningDate" className="mb-3">
              <Form.Label>Joining Date *</Form.Label>
              <Form.Control required type="date" />
              <Form.Control.Feedback type="invalid">
                Please provide a valid joining date.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group controlId="phone" className="mb-3">
              <Form.Label>Phone</Form.Label>
              <Form.Control type="tel" placeholder="9876543210" />
            </Form.Group>
            <Form.Group controlId="company" className="mb-3">
              <Form.Label>Company</Form.Label>
              <Form.Control as="select">
                <option>Select</option>
                {/* Add company options here */}
              </Form.Control>
            </Form.Group>
            <Form.Group controlId="department" className="mb-3">
              <Form.Label>Department *</Form.Label>
              <Form.Control required as="select">
                <option>Select</option>
                <option value="Global Technologies">Global Technologies</option>
              </Form.Control>
            </Form.Group>
            <Form.Group controlId="designation" className="mb-3">
              <Form.Label>Designation *</Form.Label>
              <Form.Control required as="select">
                <option>Select</option>
                <option value="web designer">Web designer</option>
              </Form.Control>
            </Form.Group>
            <Button type="submit">Save</Button>
          </Form>
        </Card.Body>
      </Card>
    </>
  );
};

export default EmployeeForm;
