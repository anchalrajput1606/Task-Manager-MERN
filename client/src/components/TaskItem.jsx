function TaskItem({ task, onDelete, onEdit, onComplete }) {
  return (
    <div
      style={{
        border: "1px solid gray",
        margin: "10px",
        padding: "10px",
      }}
    >
      <h3>{task.title}</h3>

      <p>{task.description}</p>

      <p>Status: {task.status}</p>

      <button onClick={() => onEdit(task)}>
        Edit
      </button>

      <button onClick={() => onComplete(task._id)}>
        Complete
      </button>

      <button onClick={() => onDelete(task._id)}>
        Delete
        </button>
    </div>
  );
}

export default TaskItem;