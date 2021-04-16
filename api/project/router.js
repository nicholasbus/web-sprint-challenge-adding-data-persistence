// build your `/api/projects` router here
const router = require("express").Router();
const Project = require("./model");

router.get("/", async (req, res) => {
  try {
    const projects = await Project.get();
    if (!projects) {
      res.status(404).json({ message: "Projects not found" });
    } else {
      res.status(200).json(projects);
    }
  } catch (e) {
    res.status(500).json(e.message);
  }
});

router.post("/", async (req, res) => {
  try {
    const newProject = await Project.create(req.body);
    if (!newProject) {
      res.status(400).json({ message: "error creating new project" });
    } else {
      res.status(201).json(newProject);
    }
  } catch (e) {
    res.status(500).json(e.message);
  }
});

module.exports = router;
