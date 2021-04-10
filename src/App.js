import React from "react";
import { Switch, Route } from "react-router-dom";
import HomePage from "./components/homepage/homepage";
import Navigation from "./components/navigation/navigation";
import './App.css';

function App() {
  return (
    <div className="App">
      <Route exact={false} path="/" component={Navigation}/>
      <Switch>
        <Route exact path="/" component={HomePage}/>
      </Switch>
    </div>
  );
}

export default App;
