const db = require("../db_config");

module.exports = {
  findProjects,
  findProjectById,
  addProjects,
  findProjectResources,
  findResources,
  findResourceById,
  addResource,
  addTask,
  findTask
};

function findProjects(\) {
  return db("projects");
}
