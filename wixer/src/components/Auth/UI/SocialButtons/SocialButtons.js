import React from 'react';

import classes from './SocialButtons.module.scss';

const SocialButtons = (props) => {
	// onClick będą miały funkcje do logowania przekazane w propsach

	return (
		<div className={classes.SocialAuth}>
			<button
				className={classes.Google}
				onClick={(event) => {
					event.preventDefault();
					console.log('Google sing in');
				}}
			/>
			<button
				className={classes.Facebook}
				onClick={(event) => {
					event.preventDefault();
					console.log('Facebook sing in');
				}}
			/>
			<button
				className={classes.Github}
				onClick={(event) => {
					event.preventDefault();
					console.log('Github sing in');
				}}
			/>
		</div>
	);
};

export default SocialButtons;
