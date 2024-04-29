import React, { useState } from 'react';
import { Col, Container, Row, Button, ProgressBar, ListGroup } from 'react-bootstrap';
import HolidaysTable from '../components/holidayTable';

const AttendanceEmployee = () => {

  const activityData = [
    { id: 1, type: 'Punch In', time: '10:00 AM' },
    { id: 2, type: 'Punch Out', time: '11:00 AM' },
    { id: 3, type: 'Punch In', time: '11:15 AM' },
    { id: 4, type: 'Punch Out', time: '1:30 PM' },
    { id: 5, type: 'Punch In', time: '2:00 PM' },
    { id: 6, type: 'Punch Out', time: '7:30 PM' },
  ]; 

  const [duration, setDuration] = useState(3.45);
  const [breakTime, setBreakTime] = useState(1.21);
  const [overtime, setOvertime] = useState(3);
 
  const handlePunchOut = () => { 
  };

  return (
    <div>
      <Container>
        <Row className=' gap-2'>
          <Col className=' border '>
            <div className="text-center mt-3">
              <p>Timesheet 11 Mar 2023</p> 
              <div className=' p-2 border rounded d-flex flex-column align-items-start justify-content-start'>
               <h5>Punch In at</h5> 
                <p> Wed, 11th Mar 2023 10:00 AM</p>
              </div>
              
            </div>
            <div className=' w-100 d-flex justify-content-center align-items-center'>
              <div className="text-center rounded-circle border d-flex  align-items-center justify-content-center p-6 mt-3" style={{ height:"100px", width:"100px"}}>
             
              <p>{duration} hrs</p>
            </div>
            </div>
            
            <div className="text-center mt-3">
              <Button className=' rounded-pill' onClick={handlePunchOut} style={{background:"orange", border:"none"}}>Punch Out</Button>
            </div>
            <div className="mt-3">
              <Row>
                <Col>
                  <div className="text-center">
                    <h5>Break</h5>
                    <p>{breakTime} hrs</p>
                  </div>
                </Col>
                <Col>
                  <div className="text-center">
                    <h5>Overtime</h5>
                    <p>{overtime} hrs</p>
                  </div>
                </Col>
              </Row>
            </div>
          </Col>
          <Col className='border p-2 '>
          
          <h3 className="mt-3">Statistics</h3>
      <div className="mb-3 border">
        <div className="d-flex align-items-center p-3">
          <span className="font-weight-bold me-3">Today</span>
          <ProgressBar className="flex-grow-1" variant="warning" now={21.6} label="3.45 / 8 hrs" />
        </div>
      </div>
      <div className="mb-3 border">
        <div className="d-flex align-items-center p-3">
          <span className="font-weight-bold me-3">This Week</span>
          <ProgressBar className="flex-grow-1" variant="warning" now={70} label="28 / 40 hrs" />
        </div>
      </div>
      <div className="mb-3 border">
        <div className="d-flex align-items-center p-3">
          <span className="font-weight-bold me-3">This Month</span>
          <ProgressBar className="flex-grow-1" variant="success" now={56.25} label="90 / 160 hrs" />
        </div>
      </div>
      <div className="mb-3 border">
        <div className="d-flex align-items-center p-3">
          <span className="font-weight-bold me-3">Remaining</span>
          <ProgressBar className="flex-grow-1" variant="danger" now={56.25} label="90 / 160 hrs" />
        </div>
      </div>
      <div className=' border'>
        <div className="d-flex align-items-center p-3">
          <span className="font-weight-bold me-3">Overtime</span>
          <ProgressBar className="flex-grow-1" variant="info" now={50} label="4" />
        </div>
      </div>
          </Col>
          <Col className=' mt-4'>
          <h3>Today Activity</h3>
          <ListGroup>
            {activityData.map((activity) => (
              <ListGroup.Item key={activity.id} className=' p-3'>
                <span
                  className="circle me-2"
                  style={{
                    display: 'inline-block',
                    width: '12px',
                    height: '12px',
                    borderRadius: '50%',
                    backgroundColor: 'orange',
                    marginRight: '8px'
                  }}/>

                {activity.type} at {activity.time}
              </ListGroup.Item>
            ))}
          </ListGroup>
        </Col>
        </Row>
      </Container>
      <HolidaysTable/>
    </div>
  );
};

export default AttendanceEmployee;











