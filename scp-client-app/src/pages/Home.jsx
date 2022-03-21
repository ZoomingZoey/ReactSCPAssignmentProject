// Import react bootstrap components
import {
  Button,
  Container
} from 'react-bootstrap';

// Import components
import AppNavBar from 'components/AppNavBar';

const Home = () => {
  return (
    <>
      <AppNavBar/>
      <Container>
        <h2 className='text-center mt-5'>Welcome to the SCP Foundation</h2>

      </Container>
    </>
  );
}
 
export default Home;