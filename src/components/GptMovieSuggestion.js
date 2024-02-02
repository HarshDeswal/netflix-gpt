import React from 'react'
import {useSelector} from "react-redux";
import MovieList from './MovieList';
import Skeleton from './Skeleton';

const GptMovieSuggestion = () => {
  const {movieResult,movieNames,loading} = useSelector(store => store.gpt);
  if(!movieNames) return null;
  
  
  
  return (
    <div className='p-4 m-4 bg-black text-white'>
      <div>
        {loading ? (
          <>
          <div className='flex'>
          <Skeleton/>
          <Skeleton/>
          <Skeleton/>
          <Skeleton/>
          <Skeleton/> 
          
        </div>
        <div className='flex'>
          
          <Skeleton/>
          <Skeleton/>
          <Skeleton/>
          <Skeleton/>
          <Skeleton/> 
        </div>
        </>
        ) : movieNames.map((movie,index) => <MovieList key={movie} title={movie} movies={movieResult[index].results}/>)}
        
      </div>
    </div>
  )
}

export default GptMovieSuggestion