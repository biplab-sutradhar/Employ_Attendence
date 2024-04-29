import React from 'react';
import { Card } from 'react-bootstrap';
import Table from './tables/table';

const columns = [
  {
    Header: "#",
    accessor: "id",
    sort: true,
  },
  {
    Header: "Date",
    accessor: "date",
    sort: true,
  },
  {
    Header: "PunchIn",
    accessor: "start_time",
    sort: true,
  },
  {
    Header: "PunchOut",
    accessor: "end_time",
    sort: true,
  },
  {
    Header: "Break",
    accessor: "duration",
    sort: true,
  },
  {
    Header: "Overtime",
    accessor: "status",
    sort: true,
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

const data = [
  {
    "id": 1,
    "date": "19 Feb 2023",
    "start_time": "10 AM",
    "end_time": "7 PM",
    "duration": "1 hr",
    "status": 0
  },
  {
    "id": 2,
    "date": "20 Feb 2023",
    "start_time": "10 AM",
    "end_time": "7 PM",
    "duration": "1 hr",
    "status": 0
  },
  {
    "id": 3,
    "date": "21 Feb 2023",
    "start_time": "9 AM",
    "end_time": "6 PM",
    "duration": "1 hr",
    "status": 0
  },
  {
    "id": 4,
    "date": "22 Feb 2023",
    "start_time": "9 AM",
    "end_time": "6 PM",
    "duration": "1 hr",
    "status": 0
  },
  {
    "id": 5,
    "date": "23 Feb 2023",
    "start_time": "8 AM",
    "end_time": "5 PM",
    "duration": "1 hr",
    "status": 0
  }
];

const HolidaysTable = () => {
  return (
    <div>
      <Card>
        <Card.Body>
          
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

export default HolidaysTable;
