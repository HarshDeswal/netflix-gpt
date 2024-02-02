import React, { useRef } from 'react'
import openai from '../utils/openAI';
import { API_OPTIONS } from '../utils/constants';
import {useDispatch} from 'react-redux';
import { addGptMovieResult,toggleLoading } from '../utils/gptSlice';


const GptSearchBar = () => {
  const searchText = useRef(null);
  const dispatch = useDispatch();
  const queryPrompt = "Act as Movie Recommendation System which can suggest any type of movie of any language and suggest movies for the query:"+searchText.current?.value + ". Only give me the names of 5 movies, result should be comma separated like the example results given ahead. Example Result: Gadar, Sholay, Don, Golmaal, Koi Mil Gaya";
  
  const fetchMovies = async (movie) => {
    const data = await fetch('https://api.themoviedb.org/3/search/movie?query='+ movie +'&include_adult=false&language=en-UK&page=1',API_OPTIONS);
    const movieData = data.json();
    return movieData;

  }
  const handleGptSearchClick = async () => {
    dispatch(toggleLoading());
    const gptResults = await openai.chat.completions.create({
      messages: [{ role: 'user', content: queryPrompt }],
      model: 'gpt-3.5-turbo',
    });
    const gptMovies= gptResults.choices?.[0]?.message?.content.split(",");
    const promiseArray = gptMovies.map((movie) => fetchMovies(movie));
    const tmdbResults = await Promise.all(promiseArray);
    dispatch(addGptMovieResult({movieNames:gptMovies ,movieResult:tmdbResults}));
    dispatch(toggleLoading());
      
  }
  
  return (
    <div className='pt-[40%] md:pt-[20%] flex justify-center'>
        <form className='w-full md:w-1/2 bg-black grid grid-cols-12' onSubmit={(e)=>e.preventDefault()}>
            <input ref={searchText} type='text' className='p-4 m-4 col-span-9' placeholder='May I know you mood for movie today!'/>
            <button className='p-4 m-4 bg-red-700 text-white rounded-lg col-span-3' onClick={handleGptSearchClick}>Search</button>
            
        </form>
    </div>
  )
}

export default GptSearchBar