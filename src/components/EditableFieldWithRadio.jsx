import React, { useState } from 'react';

export const EditableFieldWithRadio = ({ label, initialValue, radioOptions }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [value, setValue] = useState(initialValue);
  const [selectedOption, setSelectedOption] = useState(radioOptions[0]);

  const handleRadioChange = (e) => setSelectedOption(e.target.value);

  
  return (
    <div className="mb-3">
      <label>{label}</label>
      {isEditing ? (
        <div className='d-flex align-items-center gap-2'>
            <div className=' d-flex align-items-center gap-2'>
            {radioOptions.map((option, index) => (
              <div key={index}>
                <input
                  type='radio'
                  id={option}
                  name={label}
                  value={option}
                  checked={selectedOption === option}
                  onChange={handleRadioChange}
                />
                <label htmlFor={option}>{option}</label>
              </div>
            ))}
          </div>
          <input type="text" className="form-control w-25" value={value} onChange={(e) => setValue(e.target.value)} />
          <button className="btn btn-primary mt-2" onClick={() => setIsEditing(false)}>Save</button>
          <button className="btn btn-secondary mt-2 ml-2" onClick={() => setIsEditing(false)}>Cancel</button>
        </div>
      ) : (
        <div className="d-flex align-items-center  gap-4 ">  
            {radioOptions.map((option, index) => (
              <div key={index}>
                <input
                  type='radio'
                  id={option}
                  name={label}
                  value={option}
                  checked={selectedOption === option}
                  onChange={handleRadioChange}
                  disabled
                />
                <label htmlFor={option}>{option}</label>
              </div>
            ))} 
          
          <input type="text" className="form-control w-25" value={value} onChange={(e) => setValue(e.target.value)} disabled/>
          
         
          <button className="btn  text-primary" onClick={() => setIsEditing(true)}>Edit</button>
        
        </div>
      )}
    </div>
  );
};
