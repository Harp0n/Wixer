import React from "react";
import styles from "./App.scss";
import { Route, Switch } from "react-router-dom";

import AuthTemplatePage from "./components/Auth/AuthTemplatePage";
import Login from "./containers/Auth/Login/Login";
import Register from "./containers/Auth/Register/Register";
import Navigation from "./containers/Navigation/Navigation";
import Day from "./containers/Day/Day";
import Week from "./containers/Week/Week";
import weekDays from "./enums/weekDays";

const App = (props) => {
  return (
    <React.Fragment>
      <div className="App">
        <Navigation />
      <Switch>
        <Route path="/auth/sign-in" component={Login} />
        <Route path="/auth/sign-up" component={Register} />
        <Route path="/auth" component={AuthTemplatePage} />
        <Route path="/day" render={() => <Day weekDay={weekDays.MONDAY} />} />
        <Route path="/week" component={Week}/>
      </Switch>
      </div>

    </React.Fragment>
  );
};

export default App;
