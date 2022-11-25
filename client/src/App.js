import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CounterPage from "./pages/CounterPage";
import {useEffect} from 'react';
function App() {

  // use API call to get user inputted time and date.
  const userDate = (new Date("2022-11-30"));
 useEffect (()=>{
  const hash = Math.random().toString(36).substring(7);
  const hasher = localStorage.getItem("hash")
  if(!hasher){
      localStorage.setItem("hash", hash);
}
return;
},[]);
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route
            path="/countdown"
            element={<CounterPage targetDate={userDate} />}
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
