import { createSlice } from '@reduxjs/toolkit';
import { MovieType } from '../MovieList';

interface InitialStateType {
    movies: MovieType;
}

const initialState: InitialStateType = {
    movies: {
        id: '',
        backgroundImg: '',
        description: '',
        cardImg: '',
        type: '',
        title: '',
        titleImg: '',
        subTitle: '',
        video: '',
        genre: '',
    },
};

const movieSlice = createSlice({
    name: 'movie',
    initialState,
    reducers: {
        setMovies: (state, action) => {
            state.movies = action.payload;
        },
    },
});

export const { setMovies } = movieSlice.actions;
export const selectMovies = (state: { movie: InitialStateType }) =>
    state.movie.movies;
export default movieSlice.reducer;
