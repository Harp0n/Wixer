import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import classes from './Register.module.scss';
import Logo from '../../../components/Auth/UI/Logo/Logo';
import Input from '../../../components/Auth/UI/Input/Input';
import Button from '../../../components/Auth/UI/Button/Button';
import SocialButtons from '../../../components/Auth/UI/SocialButtons/SocialButtons';
import divider from '../../../assets/images/auth_imgs/Divider.svg';

const Register = (props) => {

    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConf, setPasswordConf] = useState('');

    const updateUsername = (event) => {
		const name = event.target.value;
		setUsername(name);
	};
    const updateEmail = (event) => {
		const email = event.target.value;
		setEmail(email);
	};
    const updatePassword = (event) => {
		const pass = event.target.value;
		setPassword(pass);
	};
    const updatePasswordConf = (event) => {
		const pass = event.target.value;
		setPasswordConf(pass);
	};

	const images = [
		'User.svg',
		'mail_envelope_closed.svg',
		'padlock.svg',
		'padlock.svg',
	];
	const types = ['text', 'email', 'password', 'password'];
    const inpPlaceholders = ['Username', 'Email', 'Password', 'Confirm password'];
    const values = [username, email, password, passwordConf];
    const updates = [updateUsername, updateEmail, updatePassword, updatePasswordConf]

	const inputs = images.map((currImg, id) => {
		return (
			<Input key={id} type={types[id]} img={currImg} value={values[id]} change={updates[id]}>
				{inpPlaceholders[id]}
			</Input>
		);
	});

	return (
		<div className={classes.Register}>
			<Logo auth />
			<form className={classes.Form}>
				<div className={classes.DataAuth}>
					{inputs}
					<Button btnColor='blue' clicked={() => {}}>
						Sign up
					</Button>
				</div>
				<img src={divider} alt='divider' />
				<SocialButtons />
				<div className={classes.SignUp}>
					<div>Already with us?</div>
					<Link to={'/sign-in'}>Sign in</Link>
				</div>
			</form>
		</div>
	);
};

export default Register;
