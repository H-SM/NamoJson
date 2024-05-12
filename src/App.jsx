// import logo from './logo.svg';
import './App.css';
import UserState from "./context/UserState";
import Navbar from './components/Home/Navbar';
import Home from './pages/Home';
function App() {
  return (
    <UserState>
      <div className="bg-background">
        <Home />
      </div>
    </UserState>
  );
}

export default App;
