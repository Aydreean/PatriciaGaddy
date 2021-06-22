import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import Phonebar from './PhoneBar';
import Navbar from './Navbar';

import HomePage from './HomePage';
import AboutPage from './Pages/AboutPage';
import ChildCustodyPage from './Pages/ChildCustodyPage';
import ChildSupportPage from './Pages/ChildSupportPage';
import ContactPage from './Pages/ContactPage';
import DivorcePage from './Pages/DivorcePage';
import GrandparentRightsPage from './Pages/GrandparentRightsPage';
import MarriageDissolutionPage from './Pages/MarriageDissolutionPage';
import ProtectionRightsPage from './Pages/ProtectionRightsPage';
import ThirdPartyCustodyPage from './Pages/ThirdPartyCustodyPage';
import PhoneBar from './PhoneBar';

function App() {
  return (
    <Router>
      <div className="App">
        <PhoneBar></PhoneBar>
        <Navbar></Navbar>
        <Route exact path="/" render={(props) => <HomePage></HomePage>}/>
        <Route path="/Home" render={(props) => <HomePage></HomePage>}/>
        <Route path="/About" render={(props) => <AboutPage></AboutPage>}/>
        <Route path="/Services" render={(props) => <h1>Services</h1>}/>
        <Route path="/Contact" render={(props) => <ContactPage></ContactPage>}/>
        <Route path="/Divorce" render={(props) => <DivorcePage></DivorcePage>}/>
        <Route path="/Marriage-Dissolution" render={(props) => <MarriageDissolutionPage></MarriageDissolutionPage>}/>
        <Route path="/Child-Custody" render={(props) => <ChildCustodyPage></ChildCustodyPage>}/>
        <Route path="/Child-Support" render={(props) => <ChildSupportPage></ChildSupportPage>}/>
        <Route path="/Protection-Rights" render={(props) => <ProtectionRightsPage></ProtectionRightsPage>}/>
        <Route path="/Third-Party-Custody" render={(props) => <ThirdPartyCustodyPage></ThirdPartyCustodyPage>}/>
        <Route path="/Grandparent-Rights" render={(props) => <GrandparentRightsPage></GrandparentRightsPage>}/>
      </div>
    </Router>
  );
}

export default App;
