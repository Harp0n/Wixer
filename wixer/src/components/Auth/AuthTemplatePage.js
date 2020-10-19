import React from 'react';
import { Switch, Route } from 'react-router-dom';

import MainPage from './MainPage/AuthMainPage';
import Logo from './UI/Logo/Logo';
import classes from './AuthTemplatePage.module.scss';
import Login from '../../containers/Auth/Login/Login'
import Register from '../../containers/Auth/Register/Register'

const AuthTemplatePage = (props) => {
	return (
		<div className={classes.AuthTemplate}>
			<Logo />
			{/* <MainPage /> */}
			<Switch>
				<Route path='/sign-in' component={Login} />
				<Route path='/sign-up' component={Register} />
				<Route path='/' exact component={MainPage} />
			</Switch>
		</div>
	);
};

export default AuthTemplatePage;
