import { Container } from '@mui/material';
import { Content, Wrap } from './MoviceStyle.styled';
import { Link } from 'react-router-dom';
import { listOfFilms } from '@/data/ListOfFilms';
import { useAppDispatch } from '@hooks/index';
import { setMovies } from './slice/MovieSlice';

type MovieListProps = {
    handleOpen: () => void;
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

const MovieList = ({ handleOpen }: MovieListProps) => {
    const dispatch = useAppDispatch();

    const handleOnClick = (e: any, movie: MovieType) => {
        handleOpen();
        dispatch(setMovies(movie));
    };

    return (
        <Container>
            <h2>Recommened for you</h2>
            <Content>
                {listOfFilms.map((movie) => (
                    <Wrap key={movie.id}>
                        <Link
                            to={`/movie/${movie.id}`}
                            onClick={(event) => {
                                handleOnClick(event, movie);
                            }}
                        >
                            <img src={movie.cardImg} />
                        </Link>
                    </Wrap>
                ))}
            </Content>
        </Container>
    );
};

export default MovieList;
