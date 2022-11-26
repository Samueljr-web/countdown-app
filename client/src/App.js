import { useEffect, useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CounterPage from "./pages/CounterPage";
import "react-toastify/dist/ReactToastify.css";

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

  let ID = `${respData._id}`;
  let title = `${respData.title}`;
  console.log(ID);
  console.log(title)

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={ <HomePage respData={respData} setRespData={setRespData} dataID={ID} dataTitle={title} />} />
          <Route path="/:id/:title" element={<CounterPage dataID={ID} dataTitle={title}/>}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
