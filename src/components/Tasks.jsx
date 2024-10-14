import { useState } from "react";
import Task from "./Task";

let id = 0;
const Tasks = () => {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState("");

  const handleAddTask = (event) => {
    event.preventDefault();
    const taskObj = {
      id: id,
      value: task,
    };
    setTasks((t) => [...tasks, taskObj]);
    setTask("");
    id++;
  };
  const handleDelete = (id) => {
    console.log("delete", id);
    setTasks((t) => tasks.filter((task) => task.id !== id));
  };
  const handleEdit = (id, value) => {
    console.log("edit", id, value);
    const taskIndex = tasks.findIndex((task) => task.id === id);
    tasks[taskIndex] = Object.assign(tasks[taskIndex], { value });
    setTasks([...tasks]);
  };
  return (
    <div className="body">
      <div className="task-add">
        <form onSubmit={handleAddTask}>
          <label htmlFor="todo">What you want to to do</label>
          <input
            type="text"
            value={task}
            onChange={(e) => setTask(e.target.value)}
          />
          <button className="task-button" type="submit">
            Add Task
          </button>
        </form>
      </div>
      <div className="tasks">
        {tasks.map((item) => (
          <Task
            key={item.id}
            task={item}
            handleDelete={handleDelete}
            handleEdit={handleEdit}
          />
        ))}
      </div>
    </div>
  );
};

export default Tasks;
