
const Tasks= require("../models/Task")// this is the model for our database, we will use it to perform crud operations



const asyncWrapper= require("../middleWare/async")// Importing the async function which saves us the trouble of writing a lot of try catches

const{createCustomError}=require("../errors/CustomError")

//This will return all the docoments in the specified collection

const getAllTasks= asyncWrapper( async (req, res)=>{
    //Tasks.find({}) gets all the document in the specified collection 
    
const tasks= await Tasks.find({})
res.status(200).json({tasks})

})

//getting all the tasks is quite a piece of cake
const getSingleTask= asyncWrapper( async (req, res)=>{
    
const {id:taskId}=req.params
//The above line is pretty easy, id is just a parameter extracted from req.params since we have a route with this shape
//  /products/:id
//its simply id AS taskId
const task= await Tasks.findOne({_id:taskId})// find a task in the database whose _id is equal to the id params passed by the user



if(!task){
    //If the task is not there, just return an error
    return next(createCustomError(`the task was not found`, 404))
    
}
res.status(200).send({task})
    
 
})
const createTask= asyncWrapper( async (req, res)=>{
    
  const task= await Tasks.create(req.body)//This is how we post some data to our Api, very eassy peazzy write?
  
  res.status(201).json({task})//The best status code after a task is created is 201
    
  
})
const updateTask= asyncWrapper( async (req, res)=>{
     
const {id:taskId}=req.params
//easy peazy but requires a bit of brain exersice

//Thanks to mongoose, we have findOneAndUpdate, which is a useful method, the first parameter ofcourse is the document we wan't to update
//for us its the document whose _id is equal to req.params.id
//The second option is of courese what we want to update it with, its req.body
//The third option is a config object
const task= await Tasks.findOneAndUpdate({_id:taskId}, req.body,{
    new:true,
    runValidators:true
})
//if the task with that id wasn't found, return 404 as shown below


if(!task){
  
   return next(createCustomError(`the task was not found`, 404))
    
}
res.status(200).json({task})
    
   
})
const deleteTask= asyncWrapper( async (req, res)=>{
  
const {id:taskId}=req.params
const task= await Tasks.findOneAndDelete({_id:taskId})
//find a task in the database whose id is the same as req.params.id,
//findOneAndDelete, will delete it for you automatically


if(!task){
   return next(createCustomError(`the task was not found`, 404))
    
}
//if it isn't there just return a 404
res.status(200).send({task})
//if deletion was successful, say salute!! 200
    
})

//export all the 5 controllers to use them in the routes folder
module.exports={

    getAllTasks, getSingleTask, createTask, updateTask, deleteTask
}