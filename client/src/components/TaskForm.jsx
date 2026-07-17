import { useEffect, useState } from "react";
import API from "../services/api";
function TaskForm({ editingTask, setEditingTask }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  useEffect(() => {
    if (editingTask) {
      setTitle(editingTask.title);
      setDescription(editingTask.description);
    }
  }, [editingTask]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await API.post("/tasks", {
            title,
            description,
            status: "Pending",
        });

      alert("Task Added Successfully!");

      setTitle("");
      setDescription("");

      console.log(response.data);
    } 
    catch (error) {
        console.log(error);
        console.log(error.response);
        console.log(error.response?.data);

        alert("Error adding task");
    }
    };
  return (
    <div>
      <h2>Add Task</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <br />
        <br />

        <textarea
          placeholder="Enter Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <br />
        <br />

        <button type="submit">Add Task</button>
      </form>
    </div>
  );
}

export default TaskForm;