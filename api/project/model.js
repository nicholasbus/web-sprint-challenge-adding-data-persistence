// build your `Project` model here
const db = require("../../data/dbConfig");

module.exports = {
  // get all projects
  async get() {
    const projects = await db("projects");

    // changing project_completed from 0 or 1 to true or false
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
    const [id] = await db("projects").insert(project);
    const formatted = await db("projects").where("project_id", id).first();

    // changing project_completed from 0 or 1 to true or false
    if (formatted.project_completed === 0) {
      formatted.project_completed = false;
    } else {
      formatted.project_completed = true;
    }
    return formatted;
  },
};
