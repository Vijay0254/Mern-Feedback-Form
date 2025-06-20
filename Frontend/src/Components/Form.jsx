import React, { useState } from 'react'
import InputSection from './InputSection'
import toast from 'react-hot-toast'
import { handleError } from '../Utils/utils'
import { Axios } from '../Utils/Axios'
import { Loader2, Send } from 'lucide-react'

const Form = () => {

    const [name, setName] = useState('')
    const [msg, setMsg] = useState('')
    const [rating, setRating] = useState(0)
    const [isPosting, setIsPosting] = useState(false)
    const [error, setError] = useState('')

    async function handlePostFeedback(event){
        event.preventDefault()

        //Error Handling
        if(!name){
            return setError('Name is Required')
        }
        if(!msg){
            return setError('Message is Required')
        }

        setIsPosting(true)
        try{
            const response = await Axios.post(`/feedback/post`, {name, msg, rating})
            if(response.data.success){
                toast.success(`Feedback is sent`)
                setError('')
                setName('') 
                setMsg('')
                setRating(0)
            }
        }
        catch(err){
            console.log(`Error in Handle Post Feedback - ${err.message}`)
            handleError(err, setError)
        }
        finally{
            setIsPosting(false)
        }
    }

    return (
        <form onSubmit={(event) =>handlePostFeedback(event)} className='bg-white p-5 sm:p-10 shadow-lg w-[330px] sm:w-[400px] lg:w-[500px] rounded-lg flex flex-col gap-y-7'>
            <InputSection name={name} setName={setName} msg={msg} setMsg={setMsg} rating={rating} setRating={setRating} error={error} />

            <button className='flex py-2 px-4 font-medium rounded text-white items-center justify-center gap-x-2 bg-blue-500 hover:bg-blue-300 duration-300 disabled:bg-blue-300 disabled:cursor-not-allowed cursor-pointer' disabled={isPosting} type='submit'>{isPosting ? <><Loader2 className='animate-spin size-5' /> Loading...</> : <><Send className='size-5' /> Submit</>}</button>
        </form>
    )
}

export default Form