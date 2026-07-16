function TaskItem({ task, onDelete }) {
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

      <button>Edit</button>

      <button onClick={() => onDelete(task._id)}>
        Delete
        </button>
    </div>
  );
}

export default TaskItem;