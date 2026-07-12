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
            status
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
        const tasks = await Task.find();

        return res.status(200).json(tasks);

    } catch (error) {

        return res.status(500).json({
            message: error.message
        });

    }
};

module.exports = {
    createTask
};

module.exports = {
    createTask,
    getTasks
};