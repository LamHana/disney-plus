import MovieList from '@components/Movie/MovieList';
import CarouselBanner from './components/carousel/Carousel';
import * as Styled from './Home.styled';
import MovieDetail from '@pages/MovieDetail';
import Viewers from './components/viewers/Viewers';
import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

export default function Home() {
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [movieId]);
    return (
        <Styled.Wrapper>
            <MovieDetail
                open={open}
                handleClose={handleClose}
            />
            <CarouselBanner />
            <Viewers />
            <MovieList
                handleOpen={handleOpen}
                text="Recommended for you"
            />
        </Styled.Wrapper>
    );
}
