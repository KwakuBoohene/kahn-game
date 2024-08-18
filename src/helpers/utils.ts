

export const handleError = (error:string|Error|unknown) =>{
    if(typeof error === 'string'){
        console.error(error)
        return error
    }
    if(error instanceof Error){
        console.error(error.message)
        return error.message
    }
    return "An error occurred"
}