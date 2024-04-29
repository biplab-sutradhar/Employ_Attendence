import React, { useState } from 'react';

const CustomDialog = ({ action, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleOpen = () => {
    setIsOpen(true);
    console.log('Action: ', action); // Use the action prop here
  };

  return (
    <div>
      <button onClick={handleOpen}>⫶</button>
      {isOpen && (
        <div className="dialog">
          <button onClick={handleClose}>❌</button>
          {children}
        </div>
      )}
    </div>
  );
};

export default CustomDialog;
