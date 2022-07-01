
//This is the file that will contain all our routes. Its our hero for the day
const express= require("express");
const router= express.Router()
const{getAllTasks,getSingleTask, createTask,updateTask,deleteTask}= require('../controllers/tasks')
//The above line of code is importing all the controllers that our application needs

router.route("/").get(getAllTasks).post(createTask)
//The default route as defined in app.js is api/v1/tasks which corresponds to /
//In the default route we can get all the tasks or create a new task



router.route("/:id").patch(updateTask).delete(deleteTask).get(getSingleTask)

//getting a single task is easy, compare the id in req.params with the items in the database, return the document with that id

//to update the task, we use app.patch
//to delete a task, the trend follows which is app.delete
module.exports=router