import { Box, Container } from '@mui/material';
import * as Styled from './MovieDetail.styled';
import { useAppSelector } from '@hooks/index';
import { selectMovies } from '@components/Movie/slice/MovieSlice';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import { useNavigate, useParams } from 'react-router-dom';
import { MovieType } from '@components/Movie/MovieList';
import requests from '@/utils/movieApi';
import { useState, useEffect } from 'react';

type MovieDetailProps = {
    open: boolean;
    handleClose: () => void;
};

const MovieDetail = ({ open, handleClose }: MovieDetailProps) => {
    const { movieId } = useParams();
    const [movieDetail, setMovieDetail] = useState<MovieType | null>(null);
    let movie = useAppSelector(selectMovies);
    if (movie.id == '') {
        movie = movieDetail || movie;
    }

    const getMovieDetail = async () => {
        try {
            const { data }: { data: MovieType } = await requests.getMovieDetail(
                movieId || movie.id
            );
            setMovieDetail(data);
        } catch (error) {
            console.error('Error fetching movie detail:', error);
            // Handle the error, e.g., show an error message to the user.
        }
    };

    useEffect(() => {
        getMovieDetail();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [movieId]);

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
                        <Styled.ModalBanner
                            url={
                                movieDetail?.backgroundImg ||
                                movie.backgroundImg ||
                                '' // Handle null case
                            }
                        >
                            <Styled.CloseIcon onClick={() => handleClose()} />
                            <Styled.Content>
                                <Styled.BannerContent>
                                    <Styled.MovieName
                                        src={
                                            movie?.titleImg ||
                                            movieDetail?.titleImg ||
                                            '' // Handle null case
                                        }
                                    />
                                    <Styled.MovieButton>
                                        <button
                                            onClick={() =>
                                                handleOnClick(
                                                    movieDetail?.id || movie.id
                                                )
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
                                <Styled.Rating>
                                    {movie?.subTitle || movieDetail?.subTitle}
                                </Styled.Rating>
                                <Styled.HDIcon />
                                <Styled.SubIcon />
                            </Styled.MovieInfoTop>
                            <Styled.GenreList>
                                {movie?.genre || movieDetail?.genre}
                            </Styled.GenreList>
                            <Styled.Desc>
                                {movie?.description || movieDetail?.description}
                            </Styled.Desc>
                        </Styled.ModalContent>
                    </Box>
                </Styled.MovieModal>
            </Styled.Wrapper>
        </Container>
    );
};

export default MovieDetail;
