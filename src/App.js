import React, { useState } from "react";
import axios from "axios";

import "./App.css";
import "../node_modules/bulma/css/bulma.min.css";
import Board from "./Board";

function App({ initialState }) {
  const [kanban, setKanban] = useState({
    id: 1,
    name: "Board01",
    tasks: [
      {
        id: 1,
        name: "buy groceries",
        status: "todo",
      },
      {
        id: 2,
        name: "read about react",
        status: "todo",
      },
      {
        id: 3,
        name: "test",
        status: "inprogress",
      },
      {
        id: 4,
        name: "study",
        status: "inprogress",
      },
      {
        id: 5,
        name: "create BackEnd",
        status: "done",
      },
      {
        id: 6,
        name: "publish API",
        status: "done",
      },
    ],
  });

  const [isLoaded, setIsLoaded] = useState(false);

  initialState.then((res) => {
    if (!isLoaded) {
      setKanban(res);
      setIsLoaded(true);
    }
  });

  const moveTask = (direction, task) => {
    console.log(task);
    const newTask = { ...task };

    if (direction === "BACK") {
      switch (task.status) {
        case "todo":
          break;
        case "inprogress":
          newTask.status = "todo";
          break;
        case "done":
          // newTask.status = "inprogress";
          break;
        default:
          break;
      }
    } else {
      console.log("MOVING TASK FORWARD");
      switch (task.status) {
        case "todo":
          newTask.status = "inprogress";
          break;
        case "inprogress":
          newTask.status = "done";
          break;
        case "done":
          break;
        default:
          break;
      }
    }
    
    // Call Backend

    const newKanbanStatus = {
      ...kanban,
      tasks: [...kanban.tasks.filter((item) => item.id !== task.id), newTask],
    };

    axios
      .put(
        `http://localhost:3001/boards/1`,
        newKanbanStatus
      )
      .then((res) => {
        setKanban(res.data);
      });
    
  };

  return (
    <div className="container">
      <Board tasks={kanban.tasks} moveTask={moveTask} />
    </div>
  );
}

export default App;
