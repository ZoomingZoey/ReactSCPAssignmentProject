// Import react bootstrap components
import {
  Container,
  Navbar,
  Nav,
} from 'react-bootstrap';

// Import react router
import {
  NavLink
} from 'react-router-dom';

// Import assets
import logo from '../assets/icons/scp-logo.png';

const AppNavBar = ({title}) => {
  return (
    <Navbar bg="light" expand="md">
      <Container>
        <Navbar.Brand href="#home">
          <img
            src={logo}
            width="50"
            height="50"
            className="d-inline-block align-center"
            alt="SCP Foundation logo"
          />{' '}
          {title}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">scps</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
 
export default AppNavBar;