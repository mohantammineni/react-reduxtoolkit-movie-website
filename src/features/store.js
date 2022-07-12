import {configureStore} from '@reduxjs/toolkit';
import moviesReducer from './movies/MovieSlice';

export const store = configureStore({
    reducer: {
        movies: moviesReducer,
    }
});