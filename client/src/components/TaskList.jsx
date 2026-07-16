import { useEffect, useState } from "react";
import API from "../services/api";
import TaskItem from "./TaskItem";

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
  const deleteTask = async (id) => {
        try {
            await API.delete(`/tasks/${id}`);

            fetchTasks();

            alert("Task Deleted Successfully!");
        } catch (error) {
            console.log(error);
            alert("Error deleting task");
        }
    };

  return (
    <div>
      <h2>Task List</h2>

      {tasks.length === 0 ? (
        <p>No Tasks Found</p>
      ) : (
        tasks.map((task) => (
            <TaskItem
                key={task._id}
                task={task}
                onDelete={deleteTask}
            />
        ))
      )}
    </div>
  );
}



export default TaskList;