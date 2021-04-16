// build your `/api/tasks` router here
const router = require("express").Router();
const Task = require("./model");

router.get("/", async (req, res) => {
  try {
    const tasks = await Task.get();
    if (!tasks) {
      res.status(404).json({ message: "Tasks not found" });
    } else {
      res.status(200).json(tasks);
    }
  } catch (e) {
    res.status(500).json(e.message);
  }
});

router.post("/", async (req, res) => {
  try {
    const newTask = await Task.create(req.body);
    if (!newTask) {
      res.status(400).json({ message: "error creating new task" });
    } else {
      res.status(201).json(newTask);
    }
  } catch (e) {
    res.status(500).json(e.message);
  }
});

module.exports = router;
