import React from 'react';
import { Day } from './containers/Day/Day';
import "./App.scss";
import weekDays from './enums/weekDays';
import Navigation from './containers/Navigation/Navigation';
function App() {
  return (
    <div className="App">
      <Navigation />
      <Day weekDay={weekDays.MONDAY} />
    </div>
  );
}

export default App;
