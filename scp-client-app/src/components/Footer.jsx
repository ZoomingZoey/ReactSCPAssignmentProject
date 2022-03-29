import {
  Container,
  Row,
  Col
} from 'react-bootstrap';

import { Link } from 'react-router-dom';

// Import assets
import logo from '../assets/icons/scp-logo.png';

const Footer = () => {
  return (
    <>
      <Container fluid className='bg-light'>
        <Container>
          <Row>
            <Col xs={12} md={3} className='mt-4'>
              <h5>Navigation</h5>
              <ul className='link-list'>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/scps">Scps</Link></li>
                <li><Link to="/scps?object-class=safe">Safe Scps</Link></li>
                <li><Link to="/scps?object-class=euclid">Euclid Scps</Link></li>
                <li><Link to="/scps?object-class=keter">Keter Scps</Link></li>
                <li><Link to="#">Site Map</Link></li>
              </ul>
            </Col>
            <Col xs={12} md={3} className='mt-4'>
              <h5>Company Info</h5>
              <ul className='link-list'>
                <li><Link to="#">About the Foundation</Link></li>
                <li><Link to="#">Careers and Job hostings</Link></li>
                <li><Link to="#">Report an SCP sighting</Link></li>
                <li><Link to="#">Contact Us</Link></li>
              </ul>
            </Col>
            <Col xs={12} md={3} className='mt-4'>
            <h5>Staff Resources</h5>
            <ul className='link-list'>
              <li><Link to="#">Report a Containment Breach</Link></li>
              <li><Link to="#">Object Class Definitions</Link></li>
              <li><Link to="#">O5 Council</Link></li>
            </ul>
            </Col>
            <Col xs={12} md={3} className='mt-4 order-md-first'>
              <img className='d-block mx-auto' src={logo} width="150" height="150" alt="SCP Foundation logo"></img>
              <h4 className='text-center'>Secure. Contain. Protect.</h4>
            </Col>
          </Row>
        </Container>
      </Container>
      <p className='text-center py-2 m-0 bg-light'>Copyright &copy; {new Date().getFullYear()} SCP Foundation</p>
    </>
  );
}
 
export default Footer;