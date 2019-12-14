exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("Projects")
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("Projects").insert([
        {
          id: 1,
          Name: "Project1",
          Completed: false,
          Description: "Enter into a state of zen"
        },
        {
          id: 2,
          Name: "Project2",
          Completed: false,
          Description: "Enter into weekend-mode"
        },
        {
          id: 3,
          Name: "Project3",
          Completed: false,
          Description: "complete sprint"
        },
        {
          id: 4,
          Name: "Project4",
          Completed: false,
          Description: "Set up a good movie to watch "
        }
      ]);
    });
};
