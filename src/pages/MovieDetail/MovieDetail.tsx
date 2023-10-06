import { Box, Container } from '@mui/material';
import * as Styled from './MovieDetail.styled';
import { useAppSelector } from '@hooks/index';
import { selectMovies } from '@components/Movie/slice/MovieSlice';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import { useNavigate, useParams } from 'react-router-dom';
import { listOfFilms } from '@/data/ListOfFilms';
import { MovieType } from '@components/Movie/MovieList';

type MovieDetailProps = {
    open: boolean;
    handleClose: () => void;
};

const MovieDetail = ({ open, handleClose }: MovieDetailProps) => {
    const { movieId } = useParams();
    // const [movie, setMovie] = useState(useAppSelector(selectMovies));
    let movie = useAppSelector(selectMovies);
    console.log(movie);
    // console.log(useAppSelector(selectMovies));
    if (movie.id == '') {
        movie =
            listOfFilms.find((film: MovieType) => film.id == movieId) || movie;
    }

    const navigate = useNavigate();

    const handleOnClick = (id: string) => {
        navigate(`/watch/${id}`);
    };

    return (
        <Container>
            <Styled.Wrapper>
                <Styled.MovieModal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Box>
                        <Styled.ModalBanner url={movie?.backgroundImg}>
                            <Styled.CloseIcon onClick={() => handleClose()} />
                            <Styled.Content>
                                <Styled.BannerContent>
                                    <Styled.MovieName src={movie?.titleImg} />
                                    <Styled.MovieButton>
                                        <button
                                            onClick={() =>
                                                handleOnClick(movie?.id)
                                            }
                                        >
                                            <PlayArrowIcon /> <Styled.Blank />
                                            Play
                                        </button>
                                        <Styled.MyAddIcon />
                                        <Styled.LikeIcon />
                                    </Styled.MovieButton>
                                </Styled.BannerContent>
                            </Styled.Content>
                        </Styled.ModalBanner>
                        <Styled.ModalContent>
                            <Styled.MovieInfoTop>
                                <Styled.Rating>{movie?.subTitle}</Styled.Rating>
                                <Styled.HDIcon />
                                <Styled.SubIcon />
                            </Styled.MovieInfoTop>
                            <Styled.GenreList>{movie?.genre}</Styled.GenreList>
                            <Styled.Desc>{movie?.description}</Styled.Desc>
                        </Styled.ModalContent>
                    </Box>
                </Styled.MovieModal>
            </Styled.Wrapper>
        </Container>
    );
};

export default MovieDetail;
