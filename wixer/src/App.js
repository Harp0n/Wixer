import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';

import AuthTemplatePage from './components/Auth/AuthTemplatePage';
import Login from './containers/Auth/Login/Login';
import Register from './containers/Auth/Register/Register';

const App = (props) => {
	return (
		<React.Fragment>
      <Navigation />
			<Switch>
				<Route path='/auth/sign-in' component={Login} />
				<Route path='/auth/sign-up' component={Register} />
				<Route path='/auth' component={AuthTemplatePage} />
        <Route path='/day' render={() => <Day weekDay={weekDays.MONDAY} />} />
			</Switch>
		</React.Fragment>
	);
};

export default App;
