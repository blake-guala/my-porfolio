import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import { Navbar } from './components/layout/Navbar';
import { Services } from './components/layout/Services';

function App() {
  return (
    <div >
      <Router>
        <Navbar/>
        <div className='container'>
          <Routes>
            <Route path='/services' element={<Services/>} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
