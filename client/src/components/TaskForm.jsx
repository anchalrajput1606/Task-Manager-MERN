import "./TaskForm.css";
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

        if (editingTask) {

          await API.put(`/tasks/${editingTask._id}`, {
            title,
            description,
            status: editingTask.status
          });

          alert("Task Updated Successfully!");
          window.location.reload();

          setEditingTask(null);

        } else {

          await API.post("/tasks", {
            title,
            description,
            status: "Pending"
          });

          alert("Task Added Successfully!");

        }

        setTitle("");
        setDescription("");

      } catch (error) {

        console.log(error);

        alert("Error");

      }
    };
  return (
    <div className="task-form">
      <h2>Add Task</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />



        <textarea
          placeholder="Enter Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />



        <button type="submit">
            {editingTask ? "Update Task" : "Add Task"}
        </button>
      </form>
    </div>
  );
}

export default TaskForm;