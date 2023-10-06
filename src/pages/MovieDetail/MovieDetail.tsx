import { Box, Container } from '@mui/material';
import * as Styled from './MovieDetail.styled';
import { useAppSelector } from '@hooks/index';
import { selectMovies } from '@components/Movie/slice/MovieSlice';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';

type MovieDetailProps = {
    open: boolean;
    handleClose: () => void;
};

const MovieDetail = ({ open, handleClose }: MovieDetailProps) => {
    const movie = useAppSelector(selectMovies);

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
                        <Styled.ModalBanner url={movie.backgroundImg}>
                            <Styled.CloseIcon onClick={() => handleClose()} />
                            <Styled.Content>
                                <Styled.BannerContent>
                                    <Styled.MovieName src={movie.titleImg} />
                                    <Styled.MovieButton>
                                        <button>
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
                                <Styled.Rating>{movie.subTitle}</Styled.Rating>
                                <Styled.HDIcon />
                                <Styled.SubIcon />
                            </Styled.MovieInfoTop>
                            <Styled.GenreList>{movie.genre}</Styled.GenreList>
                            <Styled.Desc>{movie.description}</Styled.Desc>
                        </Styled.ModalContent>
                    </Box>
                </Styled.MovieModal>
            </Styled.Wrapper>
        </Container>
    );
};

export default MovieDetail;
