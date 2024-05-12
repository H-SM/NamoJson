// import logo from './logo.svg';
import './App.css';
import UserState from "./context/UserState";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './pages/Home';
import Docs from './pages/Docs';
function App() {
  return (
    <UserState>
      <div className="bg-background">
        <Router>
          <Routes>
            <Route exact path="/" element={<Home/>} />
            <Route exact path="/docs" element={<Docs/>} />
            <Route path="*" element={<Docs />} />
          </Routes>
        </Router>
      </div>
    </UserState>
  );
}

export default App;
