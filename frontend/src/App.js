import './App.css';
import Donate from './pages/Donate';
import Collect from './pages/Collect';
import Landing from './pages/Landing';
import PontodeRecolha from './pages/PontodeRecolha';
import WhoWeAre from './pages/WhoWeAre';
import FAQ from './pages/FAQ';
import Voluntary from './pages/Voluntary.js';
import NavBar from './components/NavBar';
import Management from './pages/Management';
import { BrowserRouter, Switch, Route } from "react-router-dom"
import User from './pages/User';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <NavBar />
      <div>
      <Switch>
            <Route exact path="/">
                <Landing />
            </Route>
            <Route exact path="/donate">
                <Donate />
            </Route>
            <Route exact path="/collect">
                <Collect />
            </Route>
            <Route exact path="/Quem-Somos">
                <WhoWeAre />
            </Route>
            <Route exact path="/FAQ">
                <FAQ />
            </Route>
            <Route exact path="/Voluntario">
                <Voluntary />
            </Route>
            <Route exact path="/Utilizador">
                <User />
            </Route>
            <Route exact path="/Gestão">
                <Management />
            </Route>
            <Route exact path="/PontodeRecolha/:freguesias/locations/:rua">
                <PontodeRecolha />
            </Route>
      </Switch>
        </div>
        </BrowserRouter>
    </div>
  );
}

export default App;
