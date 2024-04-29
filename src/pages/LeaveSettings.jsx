import React from 'react';
import EditableField from '../components/EditableFields';
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form';
import { EditableFieldWithRadio } from '../components/EditableFieldWithRadio';
import CustomDialog from '../components/CustomDialog';
import Table from '../components/tables/table'; 
const data = [
  {
    "id": 1,
    "employee": "Emma Anderson",
    "leaveType": "Remote Work",
    "from": "15 Aug 2023",
    "to": "30 Aug 2023",
    "noOfDays": "16 days",
    "reason": "Working from home",
    "status": "",
    "action": "⋮",
    "image": "https://randomuser.me/api/portraits/women/16.jpg"
  }
  
]

const columns = [
  {
    Header: "Image",
    accessor: "image",
    sort: false,
    Cell: ({ cell: { value } }) => <img src={value} alt="Employee" style={{ width: '50px', borderRadius: '50%' }} />,
  },
  {
    Header: "Name",
    accessor: "employee",
    sort: true,
  },
  {
    Header: "Day",
    accessor: "from",
    sort: true,
  },
  
  {
    Header: 'Action',
    accessor: 'action',
    disableSortBy: true,
    Cell: ({row}) => (
      <CustomDialog action={row.values.action}>
        <button onClick={() => { console.log(`Editing row id ${row.original.id}`); }} className='m-1  rounded-pill'>Edit</button>
        <button onClick={() => { console.log(`Deleting row id ${row.original.id}`); }} className=' rounded-pill'>Delete</button>
      </CustomDialog>
    )
  }
];

const sizePerPageList = [
  {
    text: "5",
    value: 5,
  }
];
const LeaveSettings = () => {
  return (
      <div className="container">
          <h1>Annual</h1>
          <div className='w-100 '>
          <Form className=' w-100 d-flex allign-items-center justify-content-end'>
      <Form.Check 
        type="switch"
        id="custom-switch" 
      />
      </Form>
      <div className=' p-3 border rounded mb-5'>

            <EditableField label="Policy Name" initialValue="5 years service" />
            <EditableFieldWithRadio label="Policy Name" initialValue="Carry forward" radioOptions={['Yes', 'No' ]} />
            <EditableFieldWithRadio label="Earned leave" initialValue="5 years service" radioOptions={['Yes', 'No' ]} />
            <Table
              columns={columns}
              data={data}
              
              isSortable={true}
              pagination={true}
              isSearchable={true}
            />
      </div>
      <div className='p-3 border rounded mb-5 mt-3'>
            <EditableField label="Policy Name" initialValue="5 years service" />
            <Table
              columns={columns}
              data={data} 
              isSortable={true}
              pagination={true}
              isSearchable={true}
            />
          </div>
      <div className=' border rounded p-3 mt-3 mb-5'>
        <EditableField label="Policy Name" initialValue="5 years service" />
        <EditableFieldWithRadio label="Policy Name" initialValue="Carry forward" radioOptions={['Yes', 'No' ]} />
        <EditableFieldWithRadio label="Earned leave" initialValue="5 years service" radioOptions={['Yes', 'No' ]} />
        <Table
        columns={columns}
        data={data}
        
        isSortable={true}
        pagination={true}
        isSearchable={true}
      />
      </div>
         </div>
          
          
      </div>
  );
};

export default LeaveSettings;
