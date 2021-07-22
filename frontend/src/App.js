import './App.css';
import Donate from './pages/Donate';
import Collect from './pages/Collect';
import Landing from './pages/Landing';
import PontodeRecolha from './pages/PontodeRecolha';
import QuemSomos from './pages/QuemSomos';
import FAQ from './pages/FAQ';
import Voluntario from './pages/Voluntario.js';
import NavBar from './components/NavBar';
import Gestão from './pages/Gestão';
import { BrowserRouter, Switch, Route } from "react-router-dom"
import Utilizador from './pages/Utilizador';

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
                <QuemSomos />
            </Route>
            <Route exact path="/FAQ">
                <FAQ />
            </Route>
            <Route exact path="/Voluntario">
                <Voluntario />
            </Route>
            <Route exact path="/Utilizador">
                <Utilizador />
            </Route>
            <Route exact path="/Gestão">
                <Gestão />
            </Route>
            <Route exact path="/PontodeRecolha">
                <PontodeRecolha />
            </Route>
      </Switch>
        </div>
        </BrowserRouter>
    </div>
  );
}

export default App;
