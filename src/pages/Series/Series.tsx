import { useState, useEffect } from 'react';
import * as Styled from './Series.styled';
import MovieDetail from '@pages/MovieDetail';
import { CarouselBanner } from '@pages/Home/components/carousel/Carousel.style';
import Viewers from '@pages/Home/components/viewers/Viewers';
import MovieList from '@components/Movie/MovieList';
import { useNavigate, useParams } from 'react-router-dom';
const Series = () => {
    const { movieId } = useParams();

    const navigate = useNavigate();
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => {
        setOpen(false);
        navigate('/home');
    };
    const handlePageChange = () => {
        if (movieId) {
            console.log(movieId);
            setOpen(true);
            navigate(`/movie/${movieId}`);
        }
    };

    useEffect(() => {
        handlePageChange();
    }, [movieId]);
    return (
        <Styled.Container>
            <MovieDetail
                open={open}
                handleClose={handleClose}
            />
            <CarouselBanner />
            <Viewers />
            <MovieList
                handleOpen={handleOpen}
                type="new"
                text="Series"
            />
        </Styled.Container>
    );
};

export default Series;
