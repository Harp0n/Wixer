import React, { useState } from "react";

import styles from "./Day.module.scss";
import Task from "../../components/task/task";

export const Day = (props) => {
  const [weekDay, setWeekDay] = useState(props.weekDay);
  const [date, setDate] = useState(props.date);

  const [tasks, setTasks] = useState([
    {
      taskID: 1,
      taskType: "positive",
      taskTime: "8:00",
      taskName: "positive task",
    },
    {
      taskID: 2,
      taskType: "negative",
      taskTime: "9:00",
      taskName: "negative task",
    },
    {
      taskID: 3,
      taskType: "neutral",
      taskTime: "11:00",
      taskName: "123456789012345", //19 ma
    },
    {
      taskID: 4,
      taskType: "neutral",
      taskTime: "11:00",
      taskName: "neutral task",
    },
  ]);

  const toggleTaskStateHandler = (taskId) => {
    const newTasks = [...tasks];
    const taskToChange = newTasks.filter((task) => task.taskID === taskId)[0];
    taskToChange.taskType =
      taskToChange.taskType === "positive" ? "neutral" : "positive";
    setTasks(newTasks);
  };

  const createNewTaskHandler = () => {
    const prevTasks = [...tasks]; 
    const newTask = { 
      taskID: prevTasks.length+1, 
      taskType: "neutral", 
      taskTime: "11:59",
      taskName: "new task!"
    }
    prevTasks.push(newTask); 
    setTasks(prevTasks); 

  };


  return (
    <div className={styles.dayBody}>
      <h1 className={styles.dayTitle}>{weekDay}</h1>
      {tasks.map((task) => (
        <Task
          onClick={toggleTaskStateHandler.bind(null, task.taskID)}
          key={task.taskID}
          taskType={task.taskType}
          taskTime={task.taskTime}
          taskName={task.taskName}
        />
      ))}

      <Task onClick={createNewTaskHandler} key={1000000000} taskType='new' taskTime='' taskName="Tap to add new item" />
    </div>
  );
};
