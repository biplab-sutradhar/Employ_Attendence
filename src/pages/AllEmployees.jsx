import { useState } from "react";
import { Button, Container, Row } from "react-bootstrap";
import EmployeeCard from "../components/allEmployeCard";
import employees from '../assets/employData';
import CustomModal from "../components/CustomModal";
import { MdOutlineGridOn } from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";
import EmployeeTable from "../components/allEmploytable";
import { Link, useParams } from "react-router-dom";

const AllEmployees = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [table, setTable] = useState(false);
  const {path} = useParams();
  // console.log(path);
  const handleOpenModal = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  return (
    <Container fluid className="bg-light min-vh-100 p-2 overflow-auto">
      <h1 className="  ">Employee Dashboard</h1>

       { <span> 
         <Link to="/"  className=' text-reset text-decoration-none me-1'>Home</Link> /
        <Link to={path}  className=' text-reset text-decoration-none ms-1'>{path}</Link> 
      </span>}
      <div className=' w-100 d-flex justify-content-end mb-3 gap-2'> 
      <Button style={{ background: table ? 'white' : 'orange', color: table ? 'black' : 'white', borderRadius: '25px', border: "none" }}  onClick={() => setTable(false)} > <MdOutlineGridOn size={30} className="mx-1"/> </Button>
      <Button style={{ background: table ? 'orange' : 'white',color: table ? 'white' : 'black',  borderRadius: '25px', border: "none" }}  onClick={() => setTable(true)}><GiHamburgerMenu size={30} className="mx-1" /> </Button>
         <Button style={{ background: 'orange', borderRadius: '25px', border: "none" }} onClick={handleOpenModal}>+ Add employee</Button>
    </div>
      <Container>
        {table ? (
          <Row>
            <EmployeeTable  />
          </Row>
        ) : (
          <Row xs={5} className=" w-100">

            {employees.map((employee) => (
              <EmployeeCard key={employee.id} employee={employee} />
            ))}
          </Row>)

        }

      </Container>
      <CustomModal show={isModalOpen} onHide={handleCloseModal} />
    </Container>
  )
}

export default AllEmployees;
