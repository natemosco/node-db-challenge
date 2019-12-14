const db = require("../db_config");

module.exports = {
  findProjects,
  findProjectByID,
  addProjects,
  findProjectResources,
  findResources,
  findResourceByID,
  addResource,
  addTask,
  findTasks
};

function findProjects() {
  return db("Projects");
}

function findProjectByID(id) {
  return db("Projects")
    .where("id", "=", id)
    .first();
}

function addProjects(projectData) {
  return db("Projects")
    .insert(projectData, "id")
    .then(([id]) => {
      return findProjectByID(id);
    });
}

function findProjectResources(Project_ID) {
  return db("Resources")
    .select(
      "Resources.id",
      "Resources.Name",
      "Resources.Description",
      "Projects.Name"
    )
    .join("Projects", "Project.id", "=", "Resources.Project_ID")
    .where("Resources.Project_ID", "=", Project_ID);
}

function findResources() {
  return db("Resources");
}

function findResourceByID(id) {
  return db("Resources")
    .where("id", "=", id)
    .first();
}

function addResource(newResource) {
  return db("Resources")
    .insert(newResource)
    .then(([id]) => {
      return findResourceByID(id);
    });
}

function addTask(task) {
  return db("Tasks")
    .insert(task)
    .then(ids => ({ id: ids[0] }));
}

function findTasks(Project_ID) {
  return db("Tasks")
    .select(
      "Tasks.id",
      "Tasks.Description",
      "Tasks.Notes",
      "Tasks.Completed",
      "Projects.Name"
    )
    .join("Projects", "Projects.id", "=", "Tasks.id")
    .where("Tasks.project_id", "=", Project_ID);
}
