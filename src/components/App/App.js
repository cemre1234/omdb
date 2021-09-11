import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { ContextWrapper } from "../ContextWrapper/ContextWrapper";
import FilmDetail from "../FilmDetail/FilmDetail";
import Home from "../Home/Home";

import "./App.css";

export default function App() {
  return (
    <div className="App">
      <Router>
        <ContextWrapper>
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
        </ContextWrapper>
      </Router>
    </div>
  );
}
