// Import react bootstrap components
import {
  Container
} from 'react-bootstrap';

// Import react router
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';

// Import page components
import Home from 'pages/Home';
import Scps from 'pages/Scps';
import Subject from 'pages/Subject';

// import components
import ScrollToTop from 'components/ScrollToTop';

const App = () => {
  return (
    <>
      <Router>
        <ScrollToTop>
          <Routes>
            <Route exact path='/' element={<Home/>}/>
            <Route path='/scps' element={<Scps/>}/>
            <Route path='/scps/:item' element={<Subject/>}/>
          </Routes>
        </ScrollToTop>
      </Router>
    </>
  );
}

export default App;
