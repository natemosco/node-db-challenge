exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("Tasks")
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("Tasks").insert([
        {
          id: 1,
          Project_ID: 1,
          Description: "use yoga mat",
          Notes: "",
          Completed: false
        },
        {
          id: 2,
          Project_ID: 2,
          Description: "sit on couch",
          Notes: "",
          Completed: false
        },
        {
          id: 3,
          Project_ID: 2,
          Description: "turn on tv",
          Notes: "",
          Completed: false
        },
        {
          id: 4,
          Project_ID: 3,
          Description: "finish seed data with laptop",
          Notes: "",
          Completed: false
        },
        {
          id: 5,
          Project_ID: 3,
          Description: "write crud operations with laptop",
          Notes: "",
          Completed: false
        },
        {
          id: 7,
          Project_ID: 4,
          Description: "set tv to right channel",
          Notes: "",
          Completed: false
        },
        {
          id: 8,
          Project_ID: 4,
          Description: "sit on couch",
          Notes: "",
          Completed: false
        },
        {
          id: 6,
          Project_ID: 4,
          Description: "turn on tv",
          Notes: "",
          Completed: false
        }
      ]);
    });
};
