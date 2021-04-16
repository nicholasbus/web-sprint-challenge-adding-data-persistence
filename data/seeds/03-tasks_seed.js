exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("tasks")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("tasks").insert([
        {
          task_description: "description1",
          task_notes: "notes1",
          task_completed: 0,
          project_id: 1,
        },
        {
          task_description: "description2",
          task_notes: "notes2",
          task_completed: 0,
          project_id: 2,
        },
        {
          task_description: "description3",
          task_notes: "notes3",
          task_completed: 0,
          project_id: 3,
        },
      ]);
    });
};
