import { useEffect, useState } from "react";
import API from "../api";

function TaskList() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    try {
      const response = await API.get("/tasks");
      setTasks(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h2>Task List</h2>

      {tasks.length === 0 ? (
        <p>No Tasks Found</p>
      ) : (
        tasks.map((task) => (
          <div
            key={task._id}
            style={{
              border: "1px solid gray",
              margin: "10px",
              padding: "10px",
            }}
          >
            <h3>{task.title}</h3>

            <p>{task.description}</p>

            <p>Status: {task.status}</p>
          </div>
        ))
      )}
    </div>
  );
}

export default TaskList;