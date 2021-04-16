// build your `Task` model here
const db = require("../../data/dbConfig");

module.exports = {
  // get all tasks
  async get() {
    const tasks = await db("tasks as t")
      .join("projects as p", "t.project_id", "p.project_id")
      .select(
        "t.task_id",
        "t.task_description",
        "t.task_notes",
        "t.task_completed",
        "p.project_name",
        "p.project_description"
      );

    // changing task_completed from 0 or 1 to true or false
    const formatted = tasks.map((task) => {
      if (task.task_completed === 0) {
        task.task_completed = false;
      } else {
        task.task_completed = true;
      }
      return task;
    });
    return formatted;
  },
  async create(task) {
    const [id] = await db("tasks").insert(task);
    const formatted = await db("tasks").where("task_id", id).first();
    // changing task_completed from 0 or 1 to true or false
    if (formatted.task_completed === 0) {
      formatted.task_completed = false;
    } else {
      formatted.task_completed = true;
    }
    return formatted;
  },
};
