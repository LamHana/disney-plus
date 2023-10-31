import { MovieType } from '@components/Movie/MovieList';
import { get, post, put, remove } from './apiCaller';

const requests = {
    getAllMovie: async () => {
        const endpoint = `/movie`;
        return await get(endpoint, {}, {})
            .then((res) => {
                return res;
            })
            .catch((err) => {
                return err;
            });
    },
    getMovieDetail: async (movieId: string) => {
        const endpoint = `/movie/${movieId}`;
        return await get(endpoint, {}, { 'content-type': 'application/json' })
            .then((res) => {
                return res;
            })
            .catch((err) => {
                console.log(err);
                return err;
            });
    },
    createMovie: (movie: MovieType) => {
        const endpoint = `/movie`;
        return post(endpoint, movie, {});
    },
    updateMovie: (movie: MovieType) => {
        const endpoint = `/movie/${movie.id}`;
        return put(endpoint, movie, {});
    },
    deleteMovie: (movieId: string) => {
        const endpoint = `/movie/${movieId}`;
        return remove(endpoint, {}, {});
    },
};

export default requests;
