import './App.css';
import Navbar from './components/Navbar';
// react router DOM
import {
    BrowserRouter as Router
} from "react-router-dom";
import Switch from "./Switch";

function App() {
  return (
    <div className="App">
      <Router>
          <Navbar />
          <div id="content">
              <Switch />
          </div>
      </Router>
    </div>
  );
}

export default App;
