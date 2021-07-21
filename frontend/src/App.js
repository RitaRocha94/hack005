import './App.css';
import Donate from './pages/Donate';
import Collect from './pages/Collect';
import Landing from './pages/Landing';
import { BrowserRouter, Switch, Route } from "react-router-dom"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
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
      </Switch>
        </div>
        </BrowserRouter>
    </div>
  );
}

export default App;
