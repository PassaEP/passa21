import React from "react";
import { Switch, Route } from "react-router-dom";
import './App.css';

function App() {
  return (
    <div className="App">
      <Route exact={false} path="/" />
      <Switch>
        <Route exact path="/" />
      </Switch>
    </div>
  );
}

export default App;
