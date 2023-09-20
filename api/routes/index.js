var express = require("express");
var router = express.Router();

const TaskList = require("../../models/tasklist");
const Task = require("../../models/task");

router.get("/api/board", async (req, res, next) => {
  try {
    const taskLists = await TaskList.find()
      .populate("tasks")
      .then((lists) => res.json(lists));
  } catch (error) {
    res.status(500).json({ error });
    console.log(error);
  }
});

router.post("/api/board/tasklists/:id", async (req, res, next) => {
  const { id } = req.params;
  const task = req.body;

  const { title, desc, order } = task;

  const newTask = new Task({
    title: title,
    description: desc,
    order: order,
  });

  await newTask.save();
  console.log(newTask);

  const taskList = await TaskList.findById(id);

  await taskList.tasks.push(newTask);
  await taskList.save();
});

router.put("/api/board/tasklists/:task_id", async (req, res, next) => {
  const taskId = req.params.task_id;

  const task = req.body;

  const { title, desc, order } = task;

  const editTask = await Task.findByIdAndUpdate(
    taskId,
    { title: title, description: desc, order: order },
    { new: true }
  );

  await editTask.save();

  console.log("task id:", taskId);
});

router.delete("/api/board/tasklists/:task_id", async (req, res, next) => {
  const id = req.params.task_id;

  await Task.findByIdAndDelete(id);

  console.log("DELETED");
});

module.exports = router;
