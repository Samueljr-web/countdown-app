import "./App.css";
import {useState} from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CounterPage from "./pages/CounterPage";
import { useEffect } from "react";
function App() {
  // use API call to get user inputted time and date.
  const userDate = new Date("2022-11-30");
  useEffect(() => {
    const hash = Math.random().toString(36).substring(7);
    const hasher = localStorage.getItem("hash");
    if (!hasher) {
      localStorage.setItem("hash", hash);
    }
    return;
  }, []);

  const [form, setForm] = useState({
    title: "",
    date: "",
    time: ""
  })

  const [resp, setResp] = useState({});

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage form={form} setForm={setForm} resp={resp} setResp={setResp} />} />
          <Route
            path="/countdown"
            element={<CounterPage targetDate={userDate} resp={resp} />}
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
