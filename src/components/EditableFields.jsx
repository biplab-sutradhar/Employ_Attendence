import React, { useState } from 'react';

const EditableField = ({ label, initialValue }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [value, setValue] = useState(initialValue);

  return (
    <div className="mb-3">
      <label>{label}</label>
      {isEditing ? (
        <div className=' d-flex align-items-center gap-2'>
          <input type="text" className="form-control w-25" value={value} onChange={(e) => setValue(e.target.value)} />
          <button className="btn btn-primary mt-2" onClick={() => setIsEditing(false)}>Save</button>
          <button className="btn btn-secondary mt-2 ml-2" onClick={() => setIsEditing(false)}>Cancel</button>
        </div>
      ) : (
        <div className="d-flex  align-items-center "> 
         
          <input type="text" className="form-control w-25" value={value} onChange={(e) => setValue(e.target.value)} disabled/>
          
          <button className="btn text-primary " onClick={() => setIsEditing(true)}>Edit</button>
        </div>
      )}
    </div>
  );
};

export default EditableField;



