// Import react bootstrap components
import {
  Container,
  Navbar,
  Nav,
} from 'react-bootstrap';

// Import react router
import {
  NavLink,
  Link
} from 'react-router-dom';

// Import assets
import logo from '../assets/icons/scp-logo.png';

const AppNavBar = () => {
  return (
    <Navbar bg="light" expand="md">
      <Container>
        <Link exact="true" to="/" className='navbar-brand'>
          <img
            src={logo}
            width="50"
            height="50"
            className="d-inline-block align-center"
            alt="SCP Foundation logo"
          />{' '}
          SCP Foundation
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {/*
              Using a ternary operator here as the return of an arrow function with the parameter 'navData'
              which is inside a JavaScript string template literal.

              Ternary operator: <condition> ? <value returned if true> : <value returned if false>

              So if the link is active (determined by the current route in the URL) the className will be 'nav-link active'
              otherwise it will be only 'nav-link'.
            */}
            <NavLink exact="true" to="/" className={`nav-link ${(navData) => navData.isActive ? 'active' : ''}`}>Home</NavLink>
            <NavLink to="/scps" className={`nav-link ${(navData) => navData.isActive ? 'active' : ''}`}>Scps</NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
 
export default AppNavBar;