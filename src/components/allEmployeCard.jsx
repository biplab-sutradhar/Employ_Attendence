import React, { useState } from 'react';  
import {  Col,   Dropdown } from 'react-bootstrap'; 
import CustomModal from './CustomModal';

const EmployeeCard = ({ employee }) => {
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
    <Col   className="shadow-sm d-flex flex-column justify-content-center align-items-center bg-white shadow-md rounded-lg p-3 m-4">
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
      <img className="rounded-circle mb-2" src={employee.image} alt={employee.name} style={{width:'80px', height:'80px'}}/>
      <div className="">
        <h2 className="font-weight-bold h4 mb-2">{employee.name}</h2>
        <p className="text-muted base text-center">{employee.role}</p>
      </div> 
      <CustomModal show={isModalOpen} onHide={handleCloseModal} employee={employee} />

    </Col>
  );
}

export default EmployeeCard;