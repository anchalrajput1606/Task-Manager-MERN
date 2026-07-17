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

    const completeTask = async (id) => {
      try {
        await API.put(`/tasks/${id}`, {
          status: "Completed",
        });

        fetchTasks();

        alert("Task Completed Successfully!");
      } catch (error) {
        console.log(error);
        alert("Error updating task");
      }
    };

    const editTask = (task) => {
      console.log(task);

      alert(`Edit Task: ${task.title}`);
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
                onEdit={editTask}
                onComplete={completeTask}
            />
        ))
      )}
    </div>
  );
}



export default TaskList;