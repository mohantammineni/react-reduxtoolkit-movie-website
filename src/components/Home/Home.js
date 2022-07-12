import React, { useEffect } from 'react';
import MovieLising from '../MovieListing/MovieListing';

import { fetchAsyncMovies,fetchAsyncShows } from '../../features/movies/MovieSlice';
import { useDispatch} from 'react-redux';
const Home = () => {
   
    const dispatch = useDispatch();
    const movieText = 'Harry';
    const showText = 'Friends';
    useEffect(() =>{
        dispatch (fetchAsyncMovies(movieText));
        dispatch (fetchAsyncShows(showText));
    },[dispatch])
    return (        
        <div>
           <div className='banner-image'></div>
           <MovieLising />
        </div>
    );
};

export default Home;