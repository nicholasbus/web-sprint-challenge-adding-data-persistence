// build your `Project` model here
const db = require("../../data/dbConfig");

module.exports = {
  // get all projects
  async get() {
    const projects = await db("projects");

    // changing task_completed from 0 or 1 to true or false
    const formatted = projects.map((project) => {
      if (project.project_completed === 0) {
        project.project_completed = false;
      } else {
        project.project_completed = true;
      }
      return project;
    });
    return formatted;
  },
  async create(project) {
    const [id] = await db("projects").insert({
      project_name: project.project_name,
      project_description: project.project_description,
      project_completed: project.project_completed,
    });
    return db("projects").where("project_id", id).first();
  },
};
