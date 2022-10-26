import './App.css';
import Navigationbar from "./components/Navbar"
import Intro from "./components/Intro"
import Populer from "./components/Populer"
import Season from './components/Onseason';
import "./style/landingPage.css"
function App() {
  return (
    <div>
      
      <div className='myBG'>
      <Navigationbar/>
      <Intro/>
      </div>

      <div className='Populer'>
      <Populer/>
      </div>

      <div className='Onseason'>
      <Season/>
      </div>
    </div>
  );
}

export default App;
