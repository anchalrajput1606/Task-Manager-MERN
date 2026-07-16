const express = require("express");
const router = express.Router();
const { protect } = require("../middleware/authMiddleware");
const {
    createTask,
    getTasks,
    getTaskById,
    updateTask,
    deleteTask
} = require("../controllers/taskController");
router.post("/", protect, createTask);
router.get("/", protect, getTasks);
router.get("/:id", getTaskById);
router.put("/:id", protect, updateTask);
router.delete("/:id", deleteTask);


module.exports = router;