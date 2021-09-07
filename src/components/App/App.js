import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import FilmDetail from "../FilmDetail/FilmDetail";
import Home from "../Home/Home";

import "./App.css";

export default function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
          </ul>

          <hr />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/page/:id">
              <FilmDetail />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}
