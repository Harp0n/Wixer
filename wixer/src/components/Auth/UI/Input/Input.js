import React from 'react';

import classes from './Input.module.scss';

const input = (props) => {
	// zrobić walidacyjne css'owe klasy:
	// szary - pisanie
	// zieleń - okej
	// czerwień - źle
	const img = require(`../../../../assets/images/auth_imgs/${props.img}`);
	return (
		<div className={classes.InputBox}>
			<input
				className={classes.Input}
				type={props.type}
				placeholder={props.children}
				value={props.value}
				onChange={props.change}
			/>
			<img className={classes.Image} src={img} alt='' />
			{/* <div className={classes.Line} /> */}
		</div>
	);
};

export default input;
