import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import HomePage from './Components/HomePage/HomePage';
import DonatePage from './Components/DonatePage/DonatePage';
function App() {
  return (
    <Router>
            <Routes>
                <Route exact path="/" element= {<HomePage/>} />
                <Route path = "/donate" element = {<DonatePage />} />
            </Routes>
    </Router>
  );
}

export default App;
