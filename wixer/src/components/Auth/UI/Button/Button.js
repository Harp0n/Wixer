import React from 'react'

import classes from './Button.module.scss'

const button = ( props) => {
    let colorClass = null;
    if (props.btnColor === 'blue') {
        colorClass = classes.BtnBlue
    }
    return (
        <button className={[classes.Button, colorClass].join(' ')} onClick={props.clicked}>{props.children}</button>
    )    
}

export default button;