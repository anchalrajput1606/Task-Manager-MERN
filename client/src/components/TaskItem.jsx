import "./TaskItem.css";
function TaskItem({ task, onDelete, onEdit, onComplete }) {
  return (
    <div className="task-card">

      <h3>{task.title}</h3>

      <p>{task.description}</p>

      <p>
        <strong>Status : </strong>

        <span
          className={`status ${
            task.status === "Completed"
              ? "completed"
              : task.status === "In Progress"
              ? "inprogress"
              : "pending"
          }`}
        >
          {task.status}
        </span>
      </p>

      <div className="buttons">

        <button
          className="edit-btn"
          onClick={() => onEdit(task)}
        >
          ✏ Edit
        </button>

        <button
          className="complete-btn"
          onClick={() => onComplete(task._id)}
        >
          ✅ Complete
        </button>

        <button
          className="delete-btn"
          onClick={() => onDelete(task._id)}
        >
          🗑 Delete
        </button>

      </div>

    </div>
  );
}

export default TaskItem;