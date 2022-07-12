import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import movieApi from '../../common/apis/MovieApi';
import {APIKey} from '../../common/apis/MoviesApiKey';

export const fetchAsyncMovies = createAsyncThunk('movies/fetchAsyncMovies', async (term) =>{
    const response = await movieApi.get(`?apiKey=${APIKey}&s=${term}&type=movie`)
    return response.data;
})

export const fetchAsyncShows = createAsyncThunk('shows/fetchAsyncShows', async (term) =>{
    const response = await movieApi.get(`?apiKey=${APIKey}&s=${term}&type=series`)
    return response.data;
})

export const fetchAsyncMovieorShowDetail = createAsyncThunk('shows/fetchAsyncMovieorShowDetail', async (id) =>{
    const response = await movieApi.get(`?apiKey=${APIKey}&i=${id}&Plot=full`)
    return response.data;
})

const initialState ={
    movies : {},
    shows :{},
    selectMovieorShow :{},
};

const movieSlice = createSlice({
    name: 'movies',
    initialState,
    reducers: {
      removeSelectedMovieorShow :(state) =>{
            state.selectMovieorShow = {};
        }
    },
    extraReducers: {
        [fetchAsyncMovies.pending] : () =>{
            console.log('pending');
        },
        [fetchAsyncMovies.fulfilled]:(state, {payload}) =>{
            console.log('Fetched Successfully!!');
            return {...state, movies: payload};
        },
        [fetchAsyncMovies.rejected] : () =>{
            console.log('Rejected');
        },
        [fetchAsyncShows.fulfilled]:(state, {payload}) =>{
            console.log('Fetched Successfully!!');
            return {...state, shows: payload};
        },
        [fetchAsyncMovieorShowDetail.fulfilled]:(state, {payload}) =>{
            console.log('Fetched Successfully!!');
            return {...state, selectMovieorShow: payload};
        },

    }

})

export const {removeSelectedMovieorShow} = movieSlice.actions;
export const getAllMovies = (state) => state.movies.movies;
export const getAllShows = (state) => state.movies.shows;
export const getSelectedMovieorShow = (state) => state.movies.selectMovieorShow;
export default movieSlice.reducer;
