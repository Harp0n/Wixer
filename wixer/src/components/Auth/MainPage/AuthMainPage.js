import React from 'react';
import { withRouter } from 'react-router-dom';

import classes from './AuthMainPage.module.scss';
import Button from '../UI/Button/Button';

const AuthMainPage = (props) => {
	const onSignInClickedHandler = () => {
		props.history.push(`${props.match.url}/sign-in`);
	};

	const onSignUpClickedHandler = () => {
		props.history.push(`${props.match.url}/sign-up`);
	};

	return (
		<div className={classes.MainPage}>
			<Button clicked={onSignInClickedHandler}>Sign in</Button>
			<Button clicked={onSignUpClickedHandler}>Sign up</Button>
		</div>
	);
};

export default withRouter(AuthMainPage);
