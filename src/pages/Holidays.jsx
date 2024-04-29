import React from 'react';
import { Card } from 'react-bootstrap';
import Table from '../components/tables/table';
import holidays from '../components/tables/holidaydata';
import StatusComponent from '../components/statusComponent';

const columns = [
  {
    Header: "#",
    accessor: "id",
    sort: true,
  },
  {
    Header: "Title",
    accessor: "Title",
    sort: true,
  },
  {
    Header: "Holiday Date",
    accessor: "HolidayDate",
    sort: true,
  },
  {
    Header: "Day",
    accessor: "Day",
    sort: true,
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
          () => <span onClick={() => console.log('Delete clicked')}>Delete</span>, 
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

const Holidays = () => {
  return (
    <div>
      <Card>
        <Card.Body>
          <h4 className="header-title">Search</h4>
          <p className="text-muted fs-14 mb-4">A Table allowing search</p>

          <Table
            columns={columns}
            data={holidays}
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

export default Holidays;
