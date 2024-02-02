import React from 'react'
import { IMG_CDN } from '../utils/constants'

const MovieCard = ({title,posterPath,date,review}) => {
  if(!posterPath) return null;
  const year = new Date(date).getFullYear();
  return (
    <div className='w-36 md:w-48 pr-4 '>
      <div>

        <div className='relative group'>
          <img alt={title} src={IMG_CDN + posterPath}/>
          <div className="absolute flex items-center justify-center opacity-0 group-hover:opacity-900 transition-opacity duration-100 hov">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-white fill-current" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
          <p className='text-white font-bold text-xl text-ellipsis overflow-hidden whitespace-nowrap hover:text-red-600'>{title}</p>
          <div className='text-white text-sm flex justify-between'>
            <p>{year}</p>
            <p>⭐ { " " + review.toFixed(1) + "/10"}</p>
          </div>    
            </div>
        </div>
          
    </div>
  )
}

export default MovieCard