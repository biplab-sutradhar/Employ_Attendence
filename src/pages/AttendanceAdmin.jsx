import React, { useState } from 'react';
import { Card, Table, Modal } from 'react-bootstrap';
import { FaCheck, FaTimes } from 'react-icons/fa';
import AttendanceModal from '../components/attendanceModal';
import { attendanceData } from '../assets/attedndanceAdminData';

const AttendanceAdmin = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedEmployee, setSelectedEmployee] = useState(null);

  const handleAttendanceIconClick = (employee) => {
    setSelectedEmployee(employee);
    setShowModal(true);
  };

  const renderAttendanceIcon = (status) => {
    return status ? <FaCheck color="green" onClick={() => handleAttendanceIconClick(status)} /> : <FaTimes color="red" />;
  };

  return (
    <div>
      <Card>
        <Card.Body>
          <h4 className="header-title mt-0 mb-1">Attendance Data</h4>
          <div className="table-responsive">
            <Table className="table mb-0">
              <thead>
                <tr>
                  <th>id</th>
                  <th>Name</th>
                  {[...Array(30).keys()].map((day) => (
                    <th key={day}>{day + 1}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {attendanceData.map((record, index) => (
                  <tr key={index}>
                    <th scope="row">{record.id}</th>
                    <td>
                      {`${record.name}`}
                    </td>
                    {[...Array(30).keys()].map((day) => (
                      <td key={day}>
                        {renderAttendanceIcon(record.attendance[day + 1])}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>
        </Card.Body>
      </Card>

      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Attendance Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {selectedEmployee && (
            <div>
              <h5>{selectedEmployee.name}</h5>
              <AttendanceModal />
            </div>
          )}
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default AttendanceAdmin;
