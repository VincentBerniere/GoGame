import React from 'react';
import './App.scss';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import routes from "./routes";
import { Navigation } from "./components/Navigation";
import { Game } from "./pages/Game";

function App() {
  return (
    <div>
      <Router>
        <header className="header">
          <Navigation />
        </header>

        <div className="content">
          <Switch>
            <Route exact path={routes.game.pathname}>
                <Game />
            </Route>
          </Switch>
        </div>

      </Router>
    </div>
  );
}

export default App;
