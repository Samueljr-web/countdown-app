import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import HomePage from './pages/HomePage';
import CounterPage from './pages/CounterPage';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={HomePage} />
          <Route path='/countdown' element={CounterPage} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
