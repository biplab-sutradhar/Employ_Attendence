import React, { useState } from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import { ListGroup } from 'react-bootstrap';
import { GoDotFill } from "react-icons/go"; 

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
   
  return (
    <div className={`h-100 bg-dark text-white `} style={{ width: open ? '100%' : '0px', transition: 'width 0.5s'}}>
     
     {open && <ListGroup variant="flush">
        {sidebarItems.map((item, index) => (
          <LinkContainer key={index} to={item.to}
          style={{color: activeLink === item.to? 'orange' : 'white', backgroundColor : "transparent",border : "none", fontSize : "0.9rem"}} >
            <ListGroup.Item
              action
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
