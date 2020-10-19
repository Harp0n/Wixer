import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import classes from './Login.module.scss';
import Logo from '../../../components/Auth/UI/Logo/Logo';
import Input from '../../../components/Auth/UI/Input/Input';
import Button from '../../../components/Auth/UI/Button/Button';
import SocialButtons from '../../../components/Auth/UI/SocialButtons/SocialButtons';
import divider from '../../../assets/images/auth_imgs/Divider.svg';

const Login = (props) => {
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');

	const updateUsername = (event) => {
		const name = event.target.value;
		setUsername(name);
	};

	const updatePassword = (event) => {
		const pass = event.target.value;
		setPassword(pass);
	};

	const images = ['User.svg', 'padlock.svg'];
	const types = ['text', 'password'];
	const inpPlaceholders = ['Username', 'Password'];
	const values = [username, password]
	const updates = [updateUsername, updatePassword]

	const inputs = images.map((currImg, id) => {
		return (
			<Input key={currImg} type={types[id]} img={currImg} value={values[id]} change={updates[id]}>
				{inpPlaceholders[id]}
			</Input>
		);
	});

	return (
		<div className={classes.Login}>
			<Logo auth />
			<form className={classes.Form}>
				<div className={classes.DataAuth}>
					{inputs}
					<a className={classes.ForgotPassword} href='xd'>
						Forgot password?
					</a>
					<Button btnColor='blue' clicked={() => {}}>
						Sign in
					</Button>
				</div>
				<img src={divider} alt='divider' />
				<SocialButtons />
				<div className={classes.SignUp}>
					<div>Don't have an account?</div>
					<Link to={'/auth/sign-up'}>Sign up</Link>
				</div>
			</form>
		</div>
	);
};

export default Login;
