exports.up = function(knex) {
  return knex.schema
    .createTable("Projects", table => {
      table.increments();
      table
        .string("Name", 255)
        .notNullable()
        .unique();
      table.text("Description", 1200);
      table.boolean("Completed").defaultTo(false);
    })
    .createTable("Resources", table => {
      table.increments();
      table
        .string("Name", 255)
        .notNullable()
        .unique();
      table.text("Description", 1200);
    })
    .createTable("Project_Resources", table => {
      table.primary(["Resource_ID", "Project_ID"]);
      table
        .integer("Resource_ID")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("Resources");
      table
        .integer("Project_Resources")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("Projects");
    });
};

exports.down = function(knex) {};
