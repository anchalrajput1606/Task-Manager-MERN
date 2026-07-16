const Task = require("../models/Task");

const createTask = async (req, res) => {
    try {

        const { title, description, status } = req.body;

        if (!title) {
            return res.status(400).json({
                message: "Title is required"
            });
        }

        const task = await Task.create({
            title,
            description,
            status,
            user: req.user._id
        });

        return res.status(201).json({
            message: "Task Created Successfully",
            task
        });

    } catch (error) {

        return res.status(500).json({
            message: error.message
        });

    }
};
const getTasks = async (req, res) => {
    try {

        const tasks = await Task.find({
            user: req.user._id
        });

        return res.status(200).json(tasks);

    } catch (error) {

        return res.status(500).json({
            message: error.message
        });

    }
};
const getTaskById = async (req, res) => {
    try {
        const task = await Task.findById(req.params.id);

        if (!task) {
            return res.status(404).json({
                message: "Task not found"
            });
        }

        return res.status(200).json(task);

    } catch (error) {
        return res.status(500).json({
            message: error.message
        });
    }
};

const updateTask = async (req, res) => {
    try {

        const { title, description, status } = req.body;

        const task = await Task.findByIdAndUpdate(
            req.params.id,
            {
                title,
                description,
                status
            },
            {
                new: true,
                runValidators: true
            }
        );

        if (!task) {
            return res.status(404).json({
                message: "Task not found"
            });
        }

        return res.status(200).json({
            message: "Task Updated Successfully",
            task
        });

    } catch (error) {

        return res.status(500).json({
            message: error.message
        });

    }
};

const deleteTask = async (req, res) => {
    try {

        const task = await Task.findByIdAndDelete(req.params.id);

        if (!task) {
            return res.status(404).json({
                message: "Task not found"
            });
        }

        return res.status(200).json({
            message: "Task Deleted Successfully"
        });

    } catch (error) {

        return res.status(500).json({
            message: error.message
        });

    }
};

module.exports = {
    createTask,
    getTasks,
    getTaskById,
    updateTask,
    deleteTask
};