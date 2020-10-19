import React from 'react';
import { Day } from './containers/Day/Day';
import "./App.scss";
import weekDays from './enums/WeekDays';
import Navigation from './containers/Navigation/Navigation';
import Week from './containers/Week/Week';
function App() {
  return (
    <div className="App">
      <Navigation />
      {/* <Day weekDay={weekDays.MONDAY} /> */}
      <Week />
    </div>
  );
}

export default App;
