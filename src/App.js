import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import { Navbar } from './components/layout/Navbar';
import { Services } from './components/pages/Services';
import { Home } from './components/pages/Home';

function App() {
  return (
    <div >
      <Router>
        <Navbar/>
        <div className='container'>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/services' element={<Services/>} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
