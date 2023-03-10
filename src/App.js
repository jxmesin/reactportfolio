import './App.css';
import 'bootstrap/dist/css/bootstrap.css';

//import Navbar from './components/Navbar';
//import HeroImage from './components/HeroImage';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import LabledInput from './components/LabledInput';
import Work from './pages/Work';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Work />
    </div>
  );
}

export default App;