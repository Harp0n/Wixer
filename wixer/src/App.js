import React from "react";
import { Day } from "./containers/Day/Day";
import "./App.scss";
import weekDays from "./enums/weekDays";
import Navigation from "./containers/Navigation/Navigation";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Navigation />
      </div>

      <Switch>
        <Route path='/day' render={() => <Day weekDay={weekDays.MONDAY} />} />
      </Switch>
    </Router>
  );
}

export default App;
