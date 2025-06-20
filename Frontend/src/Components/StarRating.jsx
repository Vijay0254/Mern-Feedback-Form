import { Star } from 'lucide-react'
import React from 'react'

const StarRating = ({ rating, setRating }) => {
  return (
    <div className='flex items-center gap-1'>
        {[1, 2, 3, 4, 5].map((element) =>(
            <Star key={element} onClick={() =>setRating(element)} className={`${element <= rating ? "fill-amber-400 text-amber-400" : "fill-white text-gray-500"} cursor-pointer`} />
        ))}

        {rating > 0 && <span onClick={() =>setRating(0)} className='text-blue-500 pl-2 cursor-pointer text-sm font-medium underline '>Clear</span>}
    </div>
  )
}

export default StarRating