class CustomError extends Error{

constructor(message, status){


    super(message)
    this.statusCode= status
}

}

const createCustomError= (message, statusCode)=>{

    return new CustomError(message, statusCode);
}
module.exports= {CustomError, createCustomError}