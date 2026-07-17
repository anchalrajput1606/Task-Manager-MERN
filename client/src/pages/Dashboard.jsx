import { useState } from "react";
import { useNavigate } from "react-router-dom";

import TaskForm from "../components/TaskForm";
import TaskList from "../components/TaskList";

function Dashboard() {

  const navigate = useNavigate();
  const [editingTask, setEditingTask] = useState(null);

  const handleLogout = () => {

    localStorage.removeItem("token");

    alert("Logged Out Successfully!");

    navigate("/");

  };

  return (
    <div>

      <h1>Task Manager</h1>

      <button onClick={handleLogout}>
        Logout
      </button>

      <TaskForm
        editingTask={editingTask}
        setEditingTask={setEditingTask}
      />

      <TaskList
        setEditingTask={setEditingTask}
      />

    </div>
  );
}

export default Dashboard;