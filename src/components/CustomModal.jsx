import React from 'react';
import Modal from 'react-bootstrap/Modal';
import EmployeeForm from './employeeForm';
const CustomModal = ({ show, onHide, employee }) => {
  return (
    <Modal show={show} onHide={onHide} dialogClassName="modal-100w">
      <Modal.Header closeButton>
        <Modal.Title>Employee Form</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <EmployeeForm employee={employee} />
      </Modal.Body>
    </Modal>
  );
}

export default CustomModal;
