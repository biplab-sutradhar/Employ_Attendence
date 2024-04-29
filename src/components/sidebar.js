import React, { useState } from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import { ListGroup } from 'react-bootstrap';
import { GoDotFill } from "react-icons/go";
import { GiHamburgerMenu } from "react-icons/gi";

const Sidebar = ({open, setOpen}) => {
  const [activeLink, setActiveLink] = useState(null);
  const sidebarItems = [
    { to: '/employees', text: 'All Employees' },
    { to: '/holidays', text: 'Holidays' },
    { to: '/admin-leaves', text: 'Leaves (Admin)' },
    { to: '/employee-leaves', text: 'Leaves (Employee)' },
    { to: '/leave-settings', text: 'Leave Settings' },
    { to: '/admin-attendance', text: 'Attendance (Admin)' },
    { to: '/employee-attendance', text: 'Attendance (Employee)' }
  ];

  
  const handleLinkClick = (link) => {
    setActiveLink(link);
  };
  const toggleSidebar = () => {
    setOpen(!open)
  };

  return (
    <div className={`h-100 bg-dark fixed-left text-white`} style={{width: open ? '100%' : '50px', transition: 'width 0.5s'}}>
      <div className={`d-flex${open ? ' justify-content-end':' justify-content-start'}`}>
        <GiHamburgerMenu size={30} onClick={toggleSidebar} />
      </div>
     {open && <ListGroup variant="flush">
        {sidebarItems.map((item, index) => (
          <LinkContainer key={index} to={item.to}>
            <ListGroup.Item
              action
              className={`text-white ${activeLink === item.to ? "bg-primary text-white" : "bg-dark"}`}
              onClick={() => handleLinkClick(item.to)}
            >
             <GoDotFill/> {item.text}
            </ListGroup.Item>
          </LinkContainer>
        ))}
      </ListGroup>}
    </div>
  );
}

export default Sidebar;
