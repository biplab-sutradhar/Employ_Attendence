import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';

import AllEmployees from './pages/AllEmployees';
import Holidays from './pages/Holidays';
import LeavesAdmin from './pages/LeavesAdmin';
import LeavesEmployee from './pages/LeavesEmployee'; 
import AttendanceAdmin from './pages/AttendanceAdmin';
import AttendanceEmployee from './pages/AttendanceEmployee.jsx';
import Sidebar from './components/sidebar';
import LeaveSettings from './pages/LeaveSettings';
import Header from './components/Header.js';

function App()  {
  const [open, setOpen] = useState(true)
  const set = open ? 2 : 1;
  return (
    <Router>
      <Header/>
      <Container fluid>
        <Row>
        <Col xs={set} className="position-fixed bg-dark text-white w-5 h-100">
        <Sidebar open={open} setOpen={setOpen}/>
    </Col>
    <Col xs={{ span: 10, offset: set }} className="overflow-auto">
            <Routes>
              <Route path="/allemployees" element={<AllEmployees />} />
              <Route path="/holidays" element={<Holidays />} />
              <Route path="/admin-leaves" element={<LeavesAdmin />} />
              <Route path="/employee-leaves" element={<LeavesEmployee />} />
              <Route path="/leave-settings" element={<LeaveSettings />} />
              <Route path="/admin-attendance" element={<AttendanceAdmin />} />
              <Route path="/employee-attendance" element={<AttendanceEmployee />} />
              <Route path="*" element={<Navigate to="/allemployees" />} />
            </Routes>
          </Col>
        </Row>
      </Container>
    </Router>
  );
}

export default App;
