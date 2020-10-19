import React from 'react'
import styles from './task.module.scss'; 
const task = props => {
    const classNames = [styles.task, styles[props.taskType]]; 
    const buttonClassNames = [styles.btn, styles[props.taskType]]
    return (
        <div onClick={props.onClick} className={classNames.join(' ')}>
            <button className={buttonClassNames.join(' ')}></button>
            {props.taskType !=='new' && <p className={styles.dateText}>{props.taskTime}</p>}
            <p>{props.taskName}</p>
        </div>
    )
}

export default React.memo(task);
