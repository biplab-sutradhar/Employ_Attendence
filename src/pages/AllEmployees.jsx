import React, { useState } from 'react';
import employees from '../assets/employData';
import Modal from 'react-bootstrap/Modal';
import Dropdown from 'react-bootstrap/Dropdown';
import EmployeeForm from '../components/employeeForm';
import { Container, Row, Col, Button } from 'react-bootstrap';

const Employee = ({ employee }) => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [statusComponentOpen, setStatusComponentOpen] = useState(false);

  const handleOpenModal = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  const handleStatusComponent = () => {
    setStatusComponentOpen(prevState => !prevState);
  };
  
  return (
    <Col xs={2} className="d-flex flex-column justify-content-center align-items-center bg-white shadow-md rounded-lg p-3 m-4">
      <div className='w-100 d-flex justify-content-end align-items-end'>
        <Dropdown isOpen={statusComponentOpen} toggle={handleStatusComponent}>
          <Dropdown.Toggle style={{ background: 'none', color: 'black', border: 'none' }} id="dropdown-basic">
            
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item onClick={handleOpenModal}>Edit</Dropdown.Item>
            <Dropdown.Item onClick={() => console.log('Delete clicked')}>Delete</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
      <img className="rounded-circle mb-2" src={employee.image} alt={employee.name} style={{width:'100px', height:'100px'}}/>
      <div className="">
        <h2 className="font-weight-bold h4 mb-2">{employee.name}</h2>
        <p className="text-muted base">{employee.role}</p>
      </div>
      <Modal show={isModalOpen} onHide={handleCloseModal} dialogClassName="modal-100w">
      <Modal.Header closeButton>
        <Modal.Title>Employee Form</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <EmployeeForm employee={employee} />
      </Modal.Body>
    </Modal>

    </Col>
  );
}

const AllEmployees = () => {
  return (
    <Container fluid className="bg-light min-vh-100 p-5 overflow-auto">
      <h1 className="text-center display-4 py-5">Employee Dashboard</h1>
      <div className=' w-100 d-flex justify-content-end'>
        <Button className=' bg-primary ' >+ Add employee</Button>
      </div>
      <Container>
        <Row>
          {employees.map((employee) => (
            <Employee key={employee.id} employee={employee} />
          ))}
        </Row>
      </Container>
    </Container>
  )
}

export default AllEmployees;
