import React from 'react'
import MovieCard from './MovieCard'

const MovieList = ({title,movies}) => {
    
    return (
        <div className='px-6'>
            <h1 className='text-lg md:text-3xl py-4 text-white'>{title}</h1>
            <div className='flex no-scrollbar overflow-x-auto none overflow-y-hidden'>
                <div className='flex'>
                    {movies?.map((movie)=> <MovieCard key={movie.id} title={movie?.title} posterPath={movie?.poster_path} date={movie?.release_date} review={movie?.vote_average}/>)
                    }
                </div>
            </div>
            
        </div>
    )
}

export default MovieList