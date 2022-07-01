const express= require('express')//importing the express framework which is an easy waay of building servers
require("dotenv").config()// Allows us to use the enviromental variables like the connection ey
const app= express()// creates our server which handles the CRUD operations
const port= process.env.PORT || 3000;// Defines the port our server is gonna run in


const notFound=require("./middleWare/notFound")//Middleware to handle any request for a resource which is not found


const error= require("./middleWare/error")//Middleware to handle any errors
const tasks= require("./router/tasks")// the router we created is imported here
const config=require("./db/config")//here we import the connectDb function that allows us to connect to the Database
app.use(express.static("./public"))//this is our frontend which must be at the top
app.use(express.json())//Allows us to send and receive json data//must be above the router since we intend to use json data
app.use('/api/tasks', tasks)// we use the router as a middleware
app.use(notFound)//the not found middleware must be below the router
app.use(error)


const start= async ()=>{
    try{
        await config(process.env.MONGO_URI)//Awaits to connect to the database, this is an async function
        //Only after its succesful can we be able to start our server
        app.listen(port, ()=>{
    console.log(`server running on${port}`)
})
    }catch(error){
        console.error(error)

    }
}
start()

