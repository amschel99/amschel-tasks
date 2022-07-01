
const{CustomError}= require("../errors/CustomError")
const errorHandler= (err, req, res, next)=>{
    if(err instanceof customError ){
return res.status(err.status).json({message:err.message})
    }
    return res.status(500).send(`oops! sorry but an error occured ${err}`)
}
module.exports= errorHandler