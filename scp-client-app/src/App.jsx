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

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path='/' element={<Home/>}/>
          <Route path='/scps' element={<Scps/>}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
