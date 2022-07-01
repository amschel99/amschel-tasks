//here we are creting the schemas for our database with the help of mongoose
//We use mongoose to create schemas for our database which is a really cool thing
const mongoose= require("mongoose")

// To create a schema, its new Mongoose.Schema({}) where the object inside is the schema/ or basically our rules

const taskSchema= new mongoose.Schema(

    {
        name:{
type:String,
required:[true, "name cannot be empty"],
trim:true,
maxLength:[20, "cannot be more than 20 characters"]
        },
         completed:{
             type:Boolean,
             default:false
         }
    }
)
//The below line of code is similar to  creating a collection called Tasks which has the schema taskSchema
//we then have to use this model in our controllers
module.exports=mongoose.model("Tasks", taskSchema)

//mongoose.model('tbl_name', schemaName)

 /*Now its like we have created a table and defined the rules of the data our table should hold*/