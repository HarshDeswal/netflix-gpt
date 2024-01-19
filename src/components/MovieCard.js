import React from 'react'
import { IMG_CDN } from '../utils/constants'

const MovieCard = ({title,posterPath}) => {
  return (
    <div className='w-48 pr-4'>
        <img alt={title} src={IMG_CDN + posterPath}/>
    </div>
  )
}

export default MovieCard