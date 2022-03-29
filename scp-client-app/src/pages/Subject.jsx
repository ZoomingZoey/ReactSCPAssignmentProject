import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

// Import react bootstrap components
import {
  Container,
} from 'react-bootstrap';

// Import components
import AppNavBar from 'components/AppNavBar';
import ScpArticle from 'components/ScpArticle';
import Footer from 'components/Footer';
import ScpArticleSkeleton from 'components/ScpArticleSkeleton';

const Subject = () => {
  const { item } = useParams();

  // returns true if an object is empty
  // These stack overflow answers helped me create this:
  // https://stackoverflow.com/questions/679915/how-do-i-test-for-an-empty-javascript-object
  const isEmptyObject = (obj) => {
    return Object.keys(obj).length === 0;
  }

  const [subject, setSubject] = useState({});

  useEffect(() => {
    // fetch all SCP subjects from the rest api
    fetch('/api/scps')
      .then(res => res.json())
      .then(data => {
        for (const scp of data) {
          if (scp.item === `SCP-${item}`) setSubject(scp);
        }
      });

    // set the page title
    document.title = `SCP-${item} - SCP Foundation`;
  }, []);

  return (
    <>
      <AppNavBar/>
      <Container className='shadow-sm rounded'>
        {isEmptyObject(subject) ? <ScpArticleSkeleton/> : <ScpArticle subject={subject}/>}
        
      </Container>
      <Footer/>
  </>
  );
}
 
export default Subject;