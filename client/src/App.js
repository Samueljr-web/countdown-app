import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CounterPage from "./pages/CounterPage";

function App() {

  // use API call to get user inputted time and date.
  const userDate = (new Date("2022-11-30"));

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
