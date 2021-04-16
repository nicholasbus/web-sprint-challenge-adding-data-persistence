exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("projects")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("projects").insert([
        {
          project_name: "project1",
          project_description: "description1",
          project_completed: 0,
        },
        {
          project_name: "project2",
          project_description: "description2",
          project_completed: 0,
        },
        {
          project_name: "project3",
          project_description: "description3",
          project_completed: 0,
        },
      ]);
    });
};
