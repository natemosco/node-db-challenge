const express = require("express");

const PM = require("./project-model");

const router = express.Router();

router.get("/", (req, res) => {
  PM.findProjects()
    .then(allProjects => {
      //console.log(allProjects, 'response from GET /');
      res.status(200).json(allProjects);
    })
    .catch(error => {
      console.log(error, "Error from get /");
      res
        .status(500)
        .json({ errorMessage: "internal error fetching list of all projects" });
    });
});

router.get("/:id", (req, res) => {
  const id = req.params.id;
  PM.findProjectByID(id)
    .then(singleProject => {
      //console.log(singleProject, 'response from GET /:id');
      res.status(200).json(singleProject);
    })
    .catch(error => {
      console.log(error, "Error from get /:id");
      res.status(500).json({
        errorMessage: "internal error fetching requested Project By ID"
      });
    });
});

router.get("/:id/tasks", (req, res) => {
  const id = req.params.id;
  PM.findTasks(id)
    .then(tasks => {
      //console.log(tasks, 'response from GET /:id/tasks');
      res.status(200).json(tasks);
    })
    .catch(error => {
      console.log(error, "Error from get /:id/tasks");
      res.status(500).json({
        errorMessage: "internal error fetching list of tasks for this project"
      });
    });
});
router.get("/resources", (req, res) => {
  PM.findResources()
    .then(allResources => {
      //console.log(allResources, 'response from GET /resources');
      res.status(200).json(allResources);
    })
    .catch(error => {
      console.log(error, "Error from get /resources");
      res.status(500).json({
        errorMessage: "internal error fetching list of all resources"
      });
    });
});
router.get("/:id/resources", (req, res) => {
  const id = req.params.id;
  PM.findProjectResources(id)
    .then(resources => {
      //console.log(resources, 'response from GET /:id/resources');
      res.status(200).json(resources);
    })
    .catch(error => {
      console.log(error, "Error from get /:id/resources");
      res.status(500).json({
        errorMessage:
          "internal error fetching resources corresponding to specified project"
      });
    });
});

router.post("/", (req, res) => {
  const newProject = req.body;
  PM.addProjects(newProject)
    .then(addedProject => {
      //console.log(addedProject, 'response from Post /');
      res.status(201).json(addedProject);
    })
    .catch(error => {
      console.log(error, "Error from Post /");
      res
        .status(500)
        .json({ errorMessage: "internal error Posting new Project" });
    });
});

router.post("/:id/tasks", (req, res) => {
  const taskBody = req.body;
  const id = req.params.id;
  taskBody.Project_ID = id;
  PM.findProjectByID(id)
    .then(project => {
      if (project) {
        PM.addTask(taskBody).then(addedTask => {
          //console.log(addedTask, 'response from Post /:id/tasks');
          res.status(200).json(addedTask);
        });
      } else {
        res.status(404).json({
          errorMessage:
            "Could not find project by this id so task was not able to be added"
        });
      }
    })
    .catch(error => {
      console.log(error, "Error from Post /:id/tasks");
      res
        .status(500)
        .json({ errorMessage: "internal error creating new task" });
    });
});

router.post("/resources", (req, res) => {
  const resourceBody = req.body;
  PM.addResource(resourceBody)
    .then(addedResource => {
      //console.log(addedResource, 'response from Post /resources');
      res.status(200).json(addedResource);
    })
    .catch(error => {
      console.log(error, "Error from Post /resources");
      res
        .status(500)
        .json({ errorMessage: "internal error posting new Resource" });
    });
});

module.exports = router;
