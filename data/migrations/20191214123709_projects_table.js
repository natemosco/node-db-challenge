exports.up = function(knex) {
  return knex.schema
    .createTable("Projects", table => {
      table.increments();
      table.string("Name", 255).notNullable();
      //* .unique(); not necessary
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
      //! table.increments();  DONT Use this where having two keys because table.increments() SETS the PRIMARY KEY
      table
        .integer("Resource_ID")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("Resources")
        .onDelete("CASCADE")
        .onUpdate("CASCADE");
      table
        .integer("Project_ID")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("Projects")
        .onDelete("CASCADE")
        .onUpdate("CASCADE");
    })
    .createTable("Tasks", table => {
      table.increments();
      table.string("Description", 1200).notNullable();
      table.string("Notes", 1200);
      table.boolean("Completed").defaultTo(false);
      table
        .integer("Project_ID")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("Projects")
        .onDelete("CASCADE")
        .onUpdate("CASCADE");
    });
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists("Tasks")
    .dropTableIfExists("Project_Resources")
    .dropTableIfExists("Resources")
    .dropTableIfExists("Projects");
};
