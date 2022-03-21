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
import ScpCard from 'components/ScpCard';
import ScpCardSkeleton from 'components/ScpCardSkeleton';

const subjectData = [
  {
    id: 1,
    item: "SCP-079",
    name: "Old AI",
    objectClass: "euclid",
    containmentProcedures: "...",
    description: "...",
    images: [
      {url: "...", caption: "..."}
    ],
    rating: 1344,
    containmentDifficulty: "normal"
  },
  {
    id: 2,
    item: "SCP-106",
    name: "The Old Man",
    objectClass: "keter",
    containmentProcedures: "...",
    description: "...",
    images: [
      {url: "...", caption: "..."}
    ],
    rating: 2762,
    containmentDifficulty: "hard"
  },
  {
    id: 3,
    item: "SCP-173",
    name: "The Sculpture",
    objectClass: "euclid",
    containmentProcedures: "...",
    description: "...",
    images: [
      {url: "...", caption: "..."}
    ],
    rating: 7661,
    containmentDifficulty: "normal"
  },
  {
    id: 4,
    item: "SCP-201",
    name: "The Empty World",
    objectClass: "euclid",
    containmentProcedures: "...",
    description: "...",
    images: [
      {url: "...", caption: "..."}
    ],
    rating: 346,
    containmentDifficulty: "normal"
  },
  {
    id: 5,
    item: "SCP-261",
    name: "Pan-Dimensional Vending",
    objectClass: "safe",
    containmentProcedures: "...",
    description: "...",
    images: [
      {url: "...", caption: "..."}
    ],
    rating: 908,
    containmentDifficulty: "easy"
  },
  {
    id: 6,
    item: "SCP-500",
    name: "Panacea",
    objectClass: "safe",
    containmentProcedures: "...",
    description: "...",
    images: [
      {url: "...", caption: "..."}
    ],
    rating: 1039,
    containmentDifficulty: "easy"
  },
  {
    id: 7,
    item: "SCP-610",
    name: "The Flesh that Hates",
    objectClass: "keter",
    containmentProcedures: "...",
    description: "...",
    images: [
      {url: "...", caption: "..."}
    ],
    rating: 1530,
    containmentDifficulty: "hard"
  },
  {
    id: 8,
    item: "SCP-682",
    name: "Hard-to-Destroy Reptile",
    objectClass: "keter",
    containmentProcedures: "...",
    description: "...",
    images: [
      {url: "...", caption: "..."}
    ],
    rating: 3133,
    containmentDifficulty: "hard"
  },
  {
    id: 9,
    item: "SCP-999",
    name: "The Tickle Monster",
    objectClass: "safe",
    containmentProcedures: "...",
    description: "...",
    images: [
      {url: "...", caption: "..."}
    ],
    rating: 2371,
    containmentDifficulty: "easy"
  },
  {
    id: 10,
    item: "SCP-1981",
    name: "RONALD REAGAN CUT UP WHILE TALKING",
    objectClass: "safe",
    containmentProcedures: "...",
    description: "...",
    images: [
      {url: "...", caption: "..."}
    ],
    rating: 2121,
    containmentDifficulty: "easy"
  },
  {
    id: 11,
    item: "SCP-3001",
    name: "Red Reality",
    objectClass: "euclid",
    containmentProcedures: "...",
    description: "...",
    images: [
      {url: "...", caption: "..."}
    ],
    rating: 2192,
    containmentDifficulty: "normal"
  },
  {
    id: 12,
    item: "SCP-3008",
    name: "A Perfectly Normal, Regular Old IKEA",
    objectClass: "euclid",
    containmentProcedures: "...",
    description: "...",
    images: [
      {url: "...", caption: "..."}
    ],
    rating: 2713,
    containmentDifficulty: "normal"
  },
  {
    id: 13,
    item: "SCP-3049",
    name: "To Make an Apple Pie from Scratch",
    objectClass: "safe",
    containmentProcedures: "...",
    description: "...",
    images: [
      {url: "...", caption: "..."}
    ],
    rating: 344,
    containmentDifficulty: "easy"
  },
  {
    id: 14,
    item: "SCP-3276",
    name: "Young Successful Independent Self-Employed CEOs",
    objectClass: "keter",
    containmentProcedures: "...",
    description: "...",
    images: [
      {url: "...", caption: "..."}
    ],
    rating: 59,
    containmentDifficulty: "hard"
  },
  {
    id: 15,
    item: "SCP-3349",
    name: "Printing EKG",
    objectClass: "keter",
    containmentProcedures: "...",
    description: "...",
    images: [
      {url: "...", caption: "..."}
    ],
    rating: 164,
    containmentDifficulty: "normal"
  }
];

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
    // TODO add fetch statement with .then(res => res.json()).then(data => setScps(data))
    setTimeout(() => setScpData(subjectData), 2500);

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
      subjects = subjects.filter(v => v.objectClass === objectClassFilter);
    }
    if (ratingFilter !== 'all') {
      subjects = subjects.filter(v => getRatingLevel(v.rating) === ratingFilter);
    }
    if (containmentDifficultyFilter !== 'all') {
      subjects = subjects.filter(v => v.containmentDifficulty === containmentDifficultyFilter);
    }

    return subjects;
  };

  return (
    <>
      <AppNavBar/>
      <Container>
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
        {scpData.length > 0 ?
          filterSubjects(scpData).map((subject) => (
            <ScpCard key={subject.item} item={subject.item}/>
          ))
          : [1,2,3,4,5,6,7,8,9,10].map(() => <ScpCardSkeleton/>)
        }
        {/*TODO Display all SCP's in a grid with 5 per row.*/}

      </Container>
    </>
  );
}
 
export default Scps;