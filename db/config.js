
//Mongoose is a tool that allows us to interact with the Mongo Database painlessely

const mongoose= require("mongoose")// importing mongoose

//mongoose.connect(url, {})// This is how you establish a connection to the database where the url is the connection String


const connect= (url)=>{
return mongoose.connect(url,
    {
        useNewUrlParser:true,
        useCreateIndex:true,
        useFindAndModify:false,
        useUnifiedTopology:true
    }
    
    )
}
module.exports=connect

