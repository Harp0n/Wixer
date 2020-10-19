import React, { useState } from 'react';
import Task from '../../enums/Task';
import weekDays from '../../enums/weekDays';
import classes from './Week.module.scss';

export default function Week() {
    const [tasks, setTasks] = useState([
        new Task(1, "positive", "8:00", "positive task", weekDays.SATURDAY),
        new Task(2, "positive", "9:00", "negative", weekDays.MONDAY),
        new Task(3, "neutral", "11:00", "positive task", weekDays.MONDAY),
        new Task(4, "neutral", "11:00", "positive task", weekDays.SATURDAY),
        new Task(5, "negative", "11:00", "positive task", weekDays.SUNDAY),
        new Task(6, "neutral", "11:00", "positive task", weekDays.THURSDAY),
        new Task(7, "positive", "11:00", "positive task", weekDays.WEDNESDAY),
        new Task(8, "neutral", "11:00", "positive task", weekDays.FRIDAY),
        new Task(9, "positive", "11:00", "positive task", weekDays.FRIDAY),
        new Task(10, "neutral", "11:00", "positive task", weekDays.TUESDAY),
        new Task(11, "neutral", "11:00", "positive task", weekDays.SUNDAY),
        new Task(12, "negative", "11:00", "positive task", weekDays.SUNDAY),
        new Task(13, "neutral", "11:00", "positive task", weekDays.TUESDAY),
        new Task(14, "positive", "11:00", "positive task", weekDays.WEDNESDAY),
        new Task(15, "neutral", "11:00", "positive task", weekDays.THURSDAY),
        new Task(16, "positive", "11:00", "positive task", weekDays.FRIDAY)
    ]);

    const leftThreeLetters = ( string ) => { return string.slice(0, 3) }

    const dayTasks = (day) => {
        return (
            <div className={classes.TaskContainer}>
                {tasks.map(task => {
                    if (task.Day === day) {
                        return (
                            <p key={task.ID}><b>{task.Time}</b> - {task.Name}</p>
                        )
                    }
                })}
            </div>
        )
    }

    const dayClickHandler = ( day ) => {
        //redirect to this day
    }

    const days = () => {
        const week = [];
        for (var day in weekDays) {
            if (weekDays.hasOwnProperty(day)) {
                week.push(
                    <div onClick={() => dayClickHandler(11)} key={weekDays[day]} className={classes.WeekDays}>
                        <h1 className={classes.dayName}>{leftThreeLetters(weekDays[day])}</h1>
                        {dayTasks(weekDays[day])}
                    </div>
                )
            }
        }

        return week.map(weekDay => weekDay);
    }

    return (
        <React.Fragment>
            <div className={classes.Week}>
                {days()}
            </div>
            <div className={classes.NavigateTime}>
                <i className={[classes.arrow, classes.left].join(" ")}></i>
                <button className={classes.buttonWeek} > CURR WEEK </button>
                <i className={[classes.arrow, classes.right].join(" ")}></i>
            </div>
        </React.Fragment>
    )
}
