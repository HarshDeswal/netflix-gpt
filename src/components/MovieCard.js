import React from 'react'
import { IMG_CDN } from '../utils/constants'

const MovieCard = ({title,posterPath,date,review}) => {
  if(!posterPath) return null;
  const year = new Date(date).getFullYear();
  return (
    <div className='w-36 md:w-48 pr-4 hover: cursor-pointer overflow-hidden'>
      <div className='relative overflow-hidden'>
        <img alt={title} src={IMG_CDN + posterPath}/>
        <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 bg-black bg-opacity-50">
          <div class="right-12 inset-y-0 grid items-center">
            <a href={"https://www.justwatch.com/in/search?q=" + title} target='_blank' class="w-10 h-10  rounded-full ring-2 ring-white grid place-items-center hover:bg-black transition">
    
              <svg class="w-4" viewBox="0 0 16 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15 7.26795C16.3333 8.03775 16.3333 9.96225 15 10.7321L3 17.6603C1.66667 18.4301 1.01267e-06 17.4678 1.07997e-06 15.9282L1.68565e-06 2.0718C1.75295e-06 0.532196 1.66667 -0.430054 3 0.339746L15 7.26795Z" fill="white" />
              </svg>
            </a>
          </div>
        </div>
        </div>
        <p className='text-white font-bold text-xl text-ellipsis overflow-hidden whitespace-nowrap hover:text-red-600'>{title}</p>
        <div className='text-white text-sm flex justify-between'>
          <p>{year}</p>
          <div className='flex justify-between items-center'>
            <div className='h-3/4 flex-col mx-2 bg-yellow-500 text-black font-extrabold text-[8px]'>
            <p className=''> IMDb</p>
            </div>
            <p>{ " " + review.toFixed(1) + "/10"}</p>
          </div>
        </div>    
      </div>     
    
  )
}

export default MovieCard