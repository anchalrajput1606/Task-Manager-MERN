import { useState } from "react";
import axios from "axios";

function TaskForm() {

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    const handleSubmit = async (e) => {

        e.preventDefault();

        try {

            await axios.post("http://localhost:5000/api/tasks", {
                title,
                description,
                status: "Pending"
            });

            alert("Task Added Successfully");

            setTitle("");
            setDescription("");

            window.location.reload();

        } catch (error) {

            console.log(error);
            alert("Error Adding Task");

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
                    required
                />

                <br /><br />

                <textarea
                    placeholder="Enter Description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />

                <br /><br />

                <button type="submit">
                    Add Task
                </button>

            </form>

        </div>
    );
}

export default TaskForm;