import './App.css';

import NavBar from './layout'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import Home from './home';
import Introduction from './Intro';

function App() {
  return (
    // <div className="App">
    //   <FontAwesomeIcon icon="fa-solid fa-image" />
    //   <div>SASWATA</div>
    // </div>
    <>
      <NavBar />
      <Home />
      <Introduction />
    </>
  );
}

export default App;
