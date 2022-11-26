import { useEffect, useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CounterPage from "./pages/CounterPage";
import "react-toastify/dist/ReactToastify.css";

//test
import axios from 'axios';
// import { getURL } from './constants/index.js'
//end

function App() {
  useEffect(() => {
    const hash = Math.random().toString(36).substring(7);
    const hasher = localStorage.getItem("hash");
    if (!hasher) {
      localStorage.setItem("hash", hash);
    }
    return;
  }, []);
  const [respData, setRespData] = useState({})

  //test
  // var ID = '663825e8ee0934fd3624c3b0';
  // var title = 'eventer';
  //end

  var ID = `${respData._id}`;
  var title = `${respData.title}`;
  console.log(ID);
  console.log(title)

  //test
  axios.get("https://lets-countdown-production.up.railway.app/api/v1/663825e8ee0934fd3624c3b0/eventer")
  .then((response) => {
    console.log(response.data);
  })
  //end

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={ <HomePage respData={respData} setRespData={setRespData} dataID={ID} dataTitle={title} />} />
          <Route path={`/${ID}/${title}`} element={<CounterPage dataID={ID} dataTitle={title}/>}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
