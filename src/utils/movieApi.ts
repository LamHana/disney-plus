import { get } from './apiCaller';

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
};

export default requests;
