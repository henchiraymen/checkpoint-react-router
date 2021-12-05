import React from "react";
import { Switch, Route } from "react-router-dom";

import "./App.css";

import Home from "./components/home/Home";
import Movie from "./components/movie/Movie";
import Error from "./components/error/Error";

function App() {
  return (
      <div className="App">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/movie/:id" component={Movie} />
          <Route path="/*" component={Error} />
        </Switch>
      </div>
  );
}

export default App;
