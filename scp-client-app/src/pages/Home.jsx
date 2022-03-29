import { useState, useEffect } from 'react';

// Import react bootstrap components
import {
  Button,
  Container
} from 'react-bootstrap';

// import LinkContainer which makes react-bootstrap Nav.Links and Buttons work with react-router-dom
import { LinkContainer } from 'react-router-bootstrap';

// Import components
import AppNavBar from 'components/AppNavBar';
import ScpCardGrid from 'components/ScpCardGrid';
import Footer from 'components/Footer';

const Home = () => {
  const [scpData, setScpData] = useState([]);

  useEffect(() => {
    // fetch all scps
    fetch('/api/scps')
      .then(res => res.json())
      .then(data => {
        // sort the scp subjects from highest rating to lowest rating
        const sortedScpData = data.sort((a, b) => b.rating - a.rating);
        // then store the scps
        setScpData(sortedScpData);
      });

    // set the page title
    document.title = "Secure. Contain. Protect. - SCP Foundation";
  }, []);

  // slice is used to get and show only the first 5 scp subjects
  const mostPopular = scpData.slice(0, 5);
  const mostPopularSafe = scpData.filter(s => s.object_class.toLowerCase() === 'safe').slice(0, 5);
  const mostPopularEuclid = scpData.filter(s => s.object_class.toLowerCase() === 'euclid').slice(0, 5);
  const mostPopularKeter = scpData.filter(s => s.object_class.toLowerCase() === 'keter').slice(0, 5);

  return (
    <>
      <AppNavBar/>
      <Container className='mb-5'>
        <h2 className='text-center mt-5 pb-5'>Welcome to the SCP Foundation</h2>
        
        <h3 className='text-center mt-5 mb-3'>Top 5 Most Popular SCP's</h3>
        <ScpCardGrid subjects={mostPopular}/>
        <div className='text-center mt-3'>
          <LinkContainer to="/scps">
            <Button variant='primary'>View All SCP's</Button>
          </LinkContainer>
        </div>
        <h3 className='text-center mt-5 mb-3'>Top 5 Most Popular Safe SCP's</h3>
        <ScpCardGrid subjects={mostPopularSafe}/>
        <div className='text-center mt-3'>
          <LinkContainer to="/scps?object-class=safe">
            <Button variant='primary'>View All Safe SCP's</Button>
          </LinkContainer>
        </div>
        <h3 className='text-center mt-5 mb-3'>Top 5 Most Popular Euclid SCP's</h3>
        <ScpCardGrid subjects={mostPopularEuclid}/>
        <div className='text-center mt-3'>
          <LinkContainer to="/scps?object-class=euclid">
            <Button variant='primary'>View All Euclid SCP's</Button>
          </LinkContainer>
        </div>
        <h3 className='text-center mt-5 mb-3'>Top 5 Most Popular Keter SCP's</h3>
        <ScpCardGrid subjects={mostPopularKeter}/>
        <div className='text-center mt-3'>
          <LinkContainer to="/scps?object-class=keter">
            <Button variant='primary'>View All Keter SCP's</Button>
          </LinkContainer>
        </div>
      </Container>
      <Footer/>
    </>
  );
}
 
export default Home;