import toast from "react-hot-toast"

//Error Handling
export const handleError = (error, setError)=>{
    if(error.response.status == 404){
        setError(error.response.data.message)
    }
    if(error.response.status == 500){
        toast.error("Internal Server Error")
    }
}