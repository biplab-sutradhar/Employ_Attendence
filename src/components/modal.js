import React from 'react';
import { Modal, Button } from 'react-bootstrap';

const CustomModal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <Modal show={isOpen} onHide={onClose} centered>
      <Modal.Body className="d-flex flex-column align-items-center overflow-auto">
        <Button className="position-absolute top-2 end-2" variant="danger" onClick={onClose}>
          Close
        </Button>
        {children}
      </Modal.Body>
    </Modal>
  );
};

export default CustomModal;
