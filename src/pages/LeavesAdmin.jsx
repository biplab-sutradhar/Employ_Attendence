import React from 'react';
import { Card } from 'react-bootstrap';
import Table from '../components/tables/table';
import data from '../assets/employeePresent'
import StatusComponent from '../components/statusComponent';
import CustomDialog from '../components/CustomDialog';

const columns = [
  {
    Header: "Image",
    accessor: "image",
    sort: false,
    Cell: ({ cell: { value } }) => <img src={value} alt="Employee" style={{ width: '50px', borderRadius: '50%' }} />,
  },

  {
    Header: "Employee",
    accessor: "employee",
    sort: true,
  },
  {
    Header: "Leave Type",
    accessor: "leaveType",
    sort: true,
  },
  {
    Header: "From",
    accessor: "from",
    sort: true,
  },
  {
    Header: "To",
    accessor: "to",
    sort: true,
  },
  {
    Header: "No Of Days",
    accessor: "noOfDays",
    sort: true,
  },
  {
    Header: "Reason",
    accessor: "reason",
    sort: true,
  },
  {
    Header: "Status",
    accessor: "status",
    Cell: ({ cell: { value } }) => (
      <StatusComponent
        status={value}
        options={[
          () => <span onClick={() => console.log('New clicked')}>New</span>,
          () => <span onClick={() => console.log('Pending clicked')}>Pending</span>,
          () => <span onClick={() => console.log('Approved clicked')}>Approved</span>,
          () => <span onClick={() => console.log('Declined clicked')}>Declined</span>,
        ]}
      />
    ),
    sort: false,
  },
  {
    Header: 'Action',
    accessor: 'action',
    disableSortBy: true,
    Cell: ({ row }) => (
      <StatusComponent
        
        status=" " 
        options={[
          () => <span onClick={() => console.log('Edit clicked')}>Edit</span>,
          () => <span onClick={() => console.log('Delete clicked')}>Delete</span>, // Correct the text to "Delete"
        ]}
      />
    )
  }
  
  
];

const sizePerPageList = [
  {
    text: "5",
    value: 5,
  },
  {
    text: "10",
    value: 10,
  },
  {
    text: "25",
    value: 25,
  }
];

const LeavesAdmin = () => {
  return (
    <div>
      <Card>
        <Card.Body>
          <h4 className="header-title">Holidays</h4>
          <p className="text-muted fs-14 mb-4">List of holidays</p>
          <Table
            columns={columns}
            data={data}
            pageSize={5}
            sizePerPageList={sizePerPageList}
            isSortable={true}
            pagination={true}
            isSearchable={true}
          />
        </Card.Body>
      </Card>
    </div>
  );
};

export default LeavesAdmin;
