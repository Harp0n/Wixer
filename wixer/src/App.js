import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';

import AuthTemplatePage from './components/Auth/AuthTemplatePage';
import Login from './containers/Auth/Login/Login';
import Register from './containers/Auth/Register/Register';

const App = (props) => {
	return (
		<React.Fragment>
			{/* <Switch>
				<Route path='/sign-in' component={Login} />
				<Route path='/sign-up' component={Register} />
				<Route path='/' component={AuthTemplatePage} />
			</Switch> */}
			<AuthTemplatePage/>
		</React.Fragment>
	);
};

export default App;
