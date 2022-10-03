import Navbarr from "./components/navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Medicine from "./components/body/Medicine";

function App() {
  return (
    <Router>
    <Navbarr/>
    <Routes>
      <Route path="/medicine" exact element={<Medicine/>}></Route>

      
    </Routes>
  </Router>
  );
}

export default App;
