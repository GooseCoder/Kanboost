import React from "react";
import Task from "./Task";

function Board({ tasks, moveTask }) {
  const todo = tasks
    .filter((task) => task.status === "todo")
    .map((task) => (
      <Task
        key={task.id}
        task={task}
        moveTask={moveTask}
      />
    ));
  const inprogress = tasks
    .filter((task) => task.status === "inprogress")
    .map((task) => (
      <Task
        key={task.id}
        task={task}
        moveTask={moveTask}
      />
    ));
  const done = tasks.filter((task) => task.status === "done")
    .map((task) => (
      <Task
        key={task.id}
        task={task}
        moveTask={moveTask}
      />
    ));

  return (
    <div className="columns">
      <div className="column">
        <p className="has-background-info has-text-centered">Todo</p>
        {todo}
      </div>
      <div className="column">
        <p className="has-background-danger has-text-centered">In Progress</p>
        {inprogress}
      </div>
      <div className="column">
        <p className="has-background-warning has-text-centered">Done</p>
        {done}
      </div>
    </div>
  );
}

export default Board;
