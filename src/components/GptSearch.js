import React from 'react'
import GptSearchBar from './GptSearchBar';
import GptMovieSuggestion from './GptMovieSuggestion';
import { BG_IMAGE } from '../utils/constants';

const GptSearch = () => {
  return (
    <div >
        <div className='fixed -z-10'>
        <img className='object-cover h-screen md:h-auto' src= {BG_IMAGE} />
        </div>
        
          <GptSearchBar/>
          <GptMovieSuggestion/>
        
    </div>
  )
}

export default GptSearch;