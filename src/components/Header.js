import { Dropdown } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FaFlagUsa } from "react-icons/fa";
import { FaFlagCheckered } from "react-icons/fa6";
import { GiHamburgerMenu } from 'react-icons/gi';

function Header({ open, setOpen }) {
  const toggleSidebar = () => {
    setOpen(!open)
  };
  return (
    <Navbar expand="lg" className=" sticky-top" style={{ backgroundColor: '#fc6075' }}>
      <Container fluid>
       { <Navbar.Brand href="#" style={{ width : "12%", transition: 'width 0.5s ', display : open ? " block" : "none"}}>SmartHR</Navbar.Brand>}
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0 w-25"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <div className={ `  d-flex${open ? ' justify-content-end':' justify-content-start'}`}>
        <GiHamburgerMenu size={30} onClick={toggleSidebar} />
      </div>
          </Nav>
          <Nav className=' me-2 border border-dark rounded-1'> 
          <Dropdown>
          <Dropdown.Toggle style={{ background: 'none', color: 'black', border: 'none' }} id="dropdown-basic">
            
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item > <FaFlagUsa/> En</Dropdown.Item>
            <Dropdown.Item ><FaFlagCheckered/>Fr</Dropdown.Item>
            <Dropdown.Item ><FaFlagUsa/>De</Dropdown.Item>
            
          </Dropdown.Menu>
        </Dropdown>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant=" primary">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;