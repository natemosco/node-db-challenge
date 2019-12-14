exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("Project_Resources")
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("Project_Resources").insert([
        { id: 1, Resource_ID: 1, Project_ID: 1 },
        { id: 2, Resource_ID: 2, Project_ID: 2 },
        { id: 3, Resource_ID: 2, Project_ID: 4 },
        { id: 4, Resource_ID: 3, Project_ID: 2 },
        { id: 5, Resource_ID: 3, Project_ID: 4 },
        { id: 6, Resource_ID: 4, Project_ID: 3 },
        { id: 7, Resource_ID: 5, Project_ID: 3 }
      ]);
    });
};
