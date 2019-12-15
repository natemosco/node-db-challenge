exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("Resources")
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("Resources").insert([
        {
          id: 1,
          Name: "Yoga_Mat",
          Description: "Soft mat used for relaxation and stretching"
        },
        { id: 2, Name: "TV", Description: "Amazing entertainement device" },
        {
          id: 3,
          Name: "Couch",
          Description: "Seat used for relaxation and watching TV"
        },
        {
          id: 4,
          Name: "Miracle",
          Description: "What I need to finish this sprint"
        },
        { id: 5, Name: "Laptop", Description: "portable personal computer" }
      ]);
    });
};
