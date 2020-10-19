import React from 'react';

import classes from './Logo.module.scss';
import logoImg from '../../../../assets/images/logo.png';

const logo = (props) => {

	const logoClasses = props.auth ? [classes.Logo, classes.LogoAuth] : [classes.Logo]
	return (
		<div className={logoClasses.join(' ')}>
			<img  className={classes.LogoImage} src={logoImg} alt='logo' />
			<p className={classes.LogoText}>Plan your life better</p>
		</div>
	);
};

export default logo;
// style={{position: "relative", top: props.top}}