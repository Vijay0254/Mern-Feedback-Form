import React from 'react'
import StarRating from './StarRating'

const InputSection = ({ name, setName, msg, setMsg, rating, setRating, error }) => {
  return (
    <div className='flex flex-col gap-y-5'>
        <div className='flex flex-col'>
          <label className='font-medium' htmlFor="name">Name</label>
          <input className='outline-none px-3 py-2 border border-slate-300 rounded placeholder:text-slate-500' value={name} onChange={(event) =>setName(event.target.value)} type="text" name="name" id="name" title='name' placeholder='Enter your name' />
          {error == "Name is Required" && <p className='text-red-500 font-medium text-sm'>{error}</p>}
        </div>
        <div className='flex flex-col'>
          <label className='font-medium' htmlFor="msg">Message</label>
          <textarea className='outline-none px-3 w-full resize-none py-2 border border-slate-300 rounded placeholder:text-slate-500' value={msg} onChange={(event) =>setMsg(event.target.value)} name="msg" id="msg" title='msg' placeholder='Share your thoughts and Suggestion' rows={5}></textarea>
          {error == "Message is Required" && <p className='text-red-500 font-medium text-sm'>{error}</p>}
        </div>
        <div className='flex flex-col gap-y-1'>
            <label className='font-medium' htmlFor="rating">Rate us</label>
            <StarRating rating={rating} setRating={setRating} />
        </div>
    </div>
  )
}

export default InputSection