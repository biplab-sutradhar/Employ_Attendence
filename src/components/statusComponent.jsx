import React from 'react';
import { Dropdown } from 'react-bootstrap';

const StatusComponent = ({  status, options }) => {
  return (
    <Dropdown>
      <Dropdown.Toggle variant="primary">
        {status}
      </Dropdown.Toggle>
      <Dropdown.Menu className="mt-2" data-bs-theme="dark">
        {options.map((option, index) => (
          <Dropdown.Item key={index}> 
            {typeof option === 'function' ? option() : option}
          </Dropdown.Item>
        ))}
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default StatusComponent;
