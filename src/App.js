import logo from './logo.svg';
import './App.css';
import NavBar from './Components/AppBar';
import Address from './Components/Address';
import Grid1 from './Components/Grid1';

function App() {
  return (
    <div className="App">
    <NavBar/>
    <Address />
    <Grid1 />
    </div>
  );
}

export default App;
