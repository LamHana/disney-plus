import * as Styled from './WatchMovie.styled';
import { useParams } from 'react-router-dom';
import { MovieType } from '@components/Movie/MovieList';
import { useEffect, useState } from 'react';
import { useAppSelector } from '@hooks/index';
import { selectMovies } from '@components/Movie/slice/movieSlice';
import requests from '@/utils/movieApi';

const WatchMovie = () => {
    const { movieId } = useParams();
    const movieDetail = useAppSelector(selectMovies);
    const [movie, setMovie] = useState<MovieType | null>(null);

    useEffect(() => {
        const getMovieDetail = async () => {
            try {
                const { data }: { data: MovieType } =
                    await requests.getMovieDetail(movieId || movieDetail.id);
                setMovie(data);
            } catch (error) {
                console.error('Error fetching movie detail:', error);
                // Handle the error, e.g., show an error message to the user.
            }
        };

        // Call getMovieDetail when the component mounts and when the movieId or movieDetail.id changes.
        getMovieDetail();
    }, [movieId, movieDetail.id]);

    if (!movie) {
        // You can return a loading indicator here
        return <div>Loading...</div>;
    }

    return (
        <Styled.Container>
            <Styled.Background>
                <img
                    src={movie.backgroundImg}
                    alt="Background"
                />
                <Styled.Overlay></Styled.Overlay>
            </Styled.Background>
            <Styled.ImageTitle>
                <img
                    src={movie.titleImg}
                    alt="Title"
                />
            </Styled.ImageTitle>
            <Styled.Video>
                <iframe
                    width="889"
                    height="500"
                    src={movie.video}
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                ></iframe>
            </Styled.Video>
        </Styled.Container>
    );
};

export default WatchMovie;
