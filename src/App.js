import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import { Home } from './components/Home';
import { Navbar } from './components/navbar/Navbar';

function App() {
  return (
    <div >
      <Router>
        <Navbar/>
        <div className='container'>
          <Routes>
            <Route path='/' element={<Home/>}/>
          </Routes>
        </div>
        <hr />
      </Router>
    </div>
  );
}

export default App;
