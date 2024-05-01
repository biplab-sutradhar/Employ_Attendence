import React from 'react';
import { Card } from 'react-bootstrap'; 
import Table from './tables/table'; 
import StatusComponent from './statusComponent';
import employeeData from '../assets/allEmployeeData';

const columns = [
  {
    Header: "Image",
    accessor: "image",
    sort: false,
    Cell: ({ cell: { value } }) => <img src={value} alt="Employee" style={{ width: '50px', borderRadius: '50%' }} />,
  },
  {
    Header: "Name",
    accessor: "name",
    sort: true,
  },
  {
    Header: "Employee ID",
    accessor: "id",
    sort: true,
  },
  {
    Header: "Email",
    accessor: "email",
    sort: true,
  },
  {
    Header: "Mobile",
    accessor: "mobile",
    sort: true,
  },
  {
    Header: "Join Date",
    accessor: "joinDate",
    sort: true,
  },
  {
    Header: "Roles",
    accessor: "roles",
    disableSortBy: true,
    Cell: ({ cell: { value } }) => {
      const randomIndex = Math.floor(Math.random() * value.length);
      const randomRole = value[randomIndex];
      return (
        <StatusComponent
          status={randomRole}
          options={value.map((role, index) => () => (
            <span key={index} onClick={() => console.log(`${role} clicked`)}>{role}</span>
          ))}
        />
      );
    }
  },
  
  
  {
    Header: "Action",
    accessor: "action",
    disableSortBy: true,
    Cell: ({ row }) => (
      <StatusComponent
        status=""
        options={[
          <span key="edit" onClick={() => console.log('Edit clicked')}>Edit</span>,
          <span key="delete" onClick={() => console.log('Delete clicked')}>Delete</span>,
        ]}
      />
    )
  },
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

const EmployeeTable = () => {
  return (
    <div>
      <Card>
        <Card.Body>
          <h4 className="header-title">Admin</h4>
          <p className="text-muted fs-14 mb-4">List of Admin</p>
          <Table
            columns={columns}
            data={employeeData}
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

export default EmployeeTable;
