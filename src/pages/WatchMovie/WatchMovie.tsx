import * as Styled from './WatchMovie.styled';
import { Container } from '@mui/material';
import { useParams } from 'react-router-dom';
import { listOfFilms } from '@/data/ListOfFilms';
import { MovieType } from '@components/Movie/MovieList';

const WatchMovie = () => {
    const { movieId } = useParams();
    const movie = listOfFilms.find((film: MovieType) => film.id == movieId);
    return (
        <Container>
            <Styled.Background>
                <img src={movie?.backgroundImg} />
                <Styled.Overlay></Styled.Overlay>
            </Styled.Background>
            <Styled.ImageTitle>
                <img src={movie?.titleImg} />
            </Styled.ImageTitle>
            <Styled.Video>
                <iframe
                    width="889"
                    height="500"
                    src={movie?.video}
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                ></iframe>
            </Styled.Video>
        </Container>
    );
};

export default WatchMovie;
