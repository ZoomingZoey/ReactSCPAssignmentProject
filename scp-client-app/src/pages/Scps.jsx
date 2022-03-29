// Import react hooks
import { useState, useEffect, useMemo } from 'react';

// Import react bootstrap components
import {
  Container,
  Row,
  Button
} from 'react-bootstrap';

// Import the react router useLocation hook
import { useLocation } from 'react-router-dom';

// Import components
import AppNavBar from 'components/AppNavBar';
import ScpCardGrid from 'components/ScpCardGrid';
import Footer from 'components/Footer';

// I used this article to help me implement query parameters with react router: https://v5.reactrouter.com/web/example/query-parameters

// A custom hook that builds on useLocation to parse
// the query string for you.
function useQuery() {
  // the useLocation hook returns the current URL which we destructure to get the URL search parameters passed in
  const { search } = useLocation();

  // the react useMemo hook computes a calculation and memoizes (stores) the calculated value, during re-renders of this conponent if any the
  // dependencies in the array passed into the useMemo hook do not change react will not recalculate the value and
  // instead use and return the value previously memoized.
  // I refered to this article to learn more about this hook: https://dmitripavlutin.com/react-usememo-hook/
  return useMemo(() => new URLSearchParams(search), [search]);
}

const Scps = () => {
    
  // getRatingLevel returns a rating level for an SCP based on its rating count
  const getRatingLevel = (rating) => {
    if (typeof(rating) !== 'number') return false;
    if (rating <= 1000) return 'very low';
    if (rating > 1000 && rating <= 2000) return 'low';
    if (rating > 2000 && rating <= 4000) return 'medium';
    if (rating > 4000 && rating <= 6000) return 'high';
    if (rating > 6000) return 'very high';
    return false;
  };
  
  // filter states
  // we need a state for each select element/filter so that react knows the value has changed and will do a re-render.
  // If we don't do this the values of the select boxes will change but they will not show the newly selected option.
  const [objectClassFilter, setObjectClassFilter] = useState('all');
  const [ratingFilter, setRatingFilter] = useState('all');
  const [containmentDifficultyFilter, setContainmentDifficultyFilter] = useState('all');

  // Validates the 'object-class' query string passed through the URL
  const validateQueryString = (str) => {
    // If the string passed in is of type string and is one of the lower case values in the array we use it's value as lower case otherwise we default to 'all'
    // then we return it
    const selectedValue = typeof(str) === 'string' && ['all', 'safe', 'euclid', 'keter', 'thaumiel', 'apollyon'].includes(str.toLowerCase()) ? str.toLowerCase() : 'all';
    return selectedValue;
  };
    
  // Use our custom hook to use the query parameters
  const query = useQuery();

  // Memoize the objectClassQuery as the URL may not always change so the query value does not have to be re-validated every re-render
  const objectClassQuery = useMemo(() => validateQueryString(query.get('object-class')), [query]);

  // date state to hold the fetched scp data
  const [scpData, setScpData] = useState([]);

  useEffect(() => {
    // fetch all SCP subjects from the rest api
    fetch('/api/scps')
      .then(res => res.json())
      .then(data => setScpData(data));

    // set the page title
    document.title = "Scps - SCP Foundation";

    // set the object class filter state to the value passed in by the object-class query parameter in the URL
    // We validate it to check if it is set, that it is of type 'string' and that it matches a valid filter option
    setObjectClassFilter(objectClassQuery);
  }, [objectClassQuery]); // Use the 'objectClassQuery' as a dependency for the useEffect so that when it does change
                          // the useEffect callback function is called

  // on change event handlers
  const handleObjectClassChange = (e) => {
    setObjectClassFilter(e.target.value);
  };

  const handleRatingChange = (e) => {
    setRatingFilter(e.target.value);
  };

  const handleContainmentDifficultyChange = (e) => {
    setContainmentDifficultyFilter(e.target.value);
  };

  const handleClearFilters = () => {
    setObjectClassFilter('all');
    setRatingFilter('all');
    setContainmentDifficultyFilter('all');
  };

  const filterSubjects = (subjects) => {
    if (objectClassFilter !== 'all') {
      subjects = subjects.filter(v => v.object_class.toLowerCase() === objectClassFilter);
    }
    if (ratingFilter !== 'all') {
      subjects = subjects.filter(v => getRatingLevel(parseInt(v.rating)) === ratingFilter);
    }
    if (containmentDifficultyFilter !== 'all') {
      subjects = subjects.filter(v => v.containment_difficulty.toLowerCase() === containmentDifficultyFilter);
    }

    return subjects;
  };

  return (
    <>
      <AppNavBar/>
      <Container className='mb-5'>
        <h2 className="mt-5 text-center">SCP's</h2>
        <Row className='d-flex justify-content-center'>
          <h6 className="mt-5 text-center">Filter Selection</h6>
          <div className='filter-container mb-5'>
            <label className="mb-2 mb-md-0">
              Object class
              <select
                className="form-select"
                onChange={handleObjectClassChange}
                value={objectClassFilter}
              >
                <option value="all">All</option>
                <option value="safe">Safe</option>
                <option value="euclid">Euclid</option>
                <option value="keter">Keter</option>
                <option value="thaumiel">Thaumiel</option>
                <option value="apollyon">Apollyon</option>
              </select>
            </label>
            <label className="mb-2 mb-md-0">
              Rating level
              <select
                className="form-select"
                onChange={handleRatingChange}
                value={ratingFilter}
              >
                <option value="all">All</option>
                <option value="very low">Very Low</option>
                <option value="low">Low</option>
                <option value="medium">Medium</option>
                <option value="high">High</option>
                <option value="very high">Very High</option>
              </select>
            </label>
            <label className="mb-2 mb-md-0">
              Containment difficulty
              <select
                className="form-select"
                onChange={handleContainmentDifficultyChange}
                value={containmentDifficultyFilter}
              >
                <option value="all">All</option>
                <option value="easy">Easy</option>
                <option value="normal">Normal</option>
                <option value="hard">Hard</option>
              </select>
            </label>
            <Button
              variant="danger"
              className="mt-2 mt-md-0"
              onClick={handleClearFilters}
              disabled={
                objectClassFilter === "all" &&
                ratingFilter === "all" &&
                containmentDifficultyFilter === "all"
              }
            >Clear
            </Button>
          </div>
        </Row>
        <ScpCardGrid subjects={filterSubjects(scpData)} skeletonCount={5}/>
      </Container>
      <Footer/>
    </>
  );
}
 
export default Scps;