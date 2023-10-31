import { Content, Wrap, Container } from './MovieStyle';
import { Link } from 'react-router-dom';
import { useAppDispatch } from '@hooks/index';
import { setMovies } from './slice/MovieSlice';
import { useState, useEffect } from 'react';
import requests from '@/utils/movieApi';
import Loading from '@components/Loading/Loading';

type MovieListProps = {
    handleOpen: () => void;
    type?: string;
    text?: string;
};

export type MovieType = {
    id: string;
    backgroundImg: string;
    description: string;
    cardImg: string;
    type: string;
    title: string;
    titleImg: string;
    subTitle: string;
    video: string;
    genre: string;
};

const MovieList = ({ handleOpen, type, text }: MovieListProps) => {
    const dispatch = useAppDispatch();
    const [movieList, setMovieList] = useState<MovieType[]>([]);

    const handleOnClick = (movie: MovieType) => {
        handleOpen();
        dispatch(setMovies(movie));
    };

    const filterType = (type) => {
        if (type) {
            setMovieList(movieList.filter((movie) => movie.type === type));
        }
    };

    const getAllMovie = async () => {
        const { data }: { data: MovieType[] } = await requests.getAllMovie();
        setMovieList(data);
    };

    useEffect(() => {
        getAllMovie();
        filterType(type);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [type]);

    return (
        <Container>
            <h2>{text}</h2>
            {movieList.length > 0 ? (
                <Content>
                    {movieList.map((movie) => (
                        <Wrap key={movie?.id}>
                            <Link
                                to={`/movie/${movie?.id}`}
                                onClick={() => {
                                    handleOnClick(movie);
                                }}
                            >
                                <img src={movie?.cardImg} />
                            </Link>
                        </Wrap>
                    ))}
                </Content>
            ) : (
                <Loading />
            )}
        </Container>
    );
};

export default MovieList;
