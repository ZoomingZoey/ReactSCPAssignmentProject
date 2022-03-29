// Import react bootstrap components
import {
  Container,
  Navbar,
  Nav,
} from 'react-bootstrap';

// import LinkContainer which makes react-bootstrap Nav.Links and Buttons work with react-router-dom
import { LinkContainer } from 'react-router-bootstrap';

// Import assets
import logo from '../assets/icons/scp-logo.png';

const AppNavBar = () => {
  return (
    <Navbar bg="light" expand="md">
      <Container>
        <LinkContainer exact="true" to="/">
          <Navbar.Brand>
            <img
              src={logo}
              width="50"
              height="50"
              className="d-inline-block align-center"
              alt="SCP Foundation logo"
            />{' '}
            SCP Foundation
          </Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="basic-navbar-nav"/>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <LinkContainer exact="true" to="/"><Nav.Link>Home</Nav.Link></LinkContainer>
            <LinkContainer to="/scps"><Nav.Link>Scps</Nav.Link></LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
 
export default AppNavBar;