import Navbarr from "./components/navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
    <Navbarr/>
    <Routes>
      {/* <Route path="/" exact element={<Home />}></Route> */}

      
    </Routes>
  </Router>
  );
}

export default App;
