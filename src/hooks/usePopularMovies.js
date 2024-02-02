import { useEffect } from 'react'
import {useDispatch,useSelector} from 'react-redux'
import { API_OPTIONS } from '../utils/constants'
import {addPopularMovies} from '../utils/movieSlice'

const usePopularMovies = () => {
    const dispatch = useDispatch();
    const popularMovies = useSelector(store => store.movies.popularMovies);
    const getPopularMovie = async () => {
    const data = await fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1',API_OPTIONS);
    const json = await data.json();
    dispatch(addPopularMovies(json.results));
    }
    useEffect(() => {
        !popularMovies && getPopularMovie();
    },[]);

  
};

export default usePopularMovies;