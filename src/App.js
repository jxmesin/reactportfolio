import './App.css';
import 'bootstrap/dist/css/bootstrap.css';

//import Navbar from './components/Navbar';
//import HeroImage from './components/HeroImage';
import Navbar from './components/Navbar';
import HeroImage from './components/HeroImage';


function App() {
  return (
    <div className="App">
      <Navbar />
      <HeroImage />
    </div>
  );
}

export default App;