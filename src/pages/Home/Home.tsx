import MovieList from '@components/Movie/MovieList';
import CarouselBanner from './components/carousel/Carousel';
import * as Styled from './Home.styled';
import MovieDetail from '@pages/MovieDetail';
import Viewers from './components/viewers/Viewers';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Home() {
    const navigate = useNavigate();
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => {
        setOpen(false);
        navigate('/home');
    };
    return (
        <Styled.Container>
            <MovieDetail
                open={open}
                handleClose={handleClose}
            />
            <CarouselBanner />
            <Viewers />
            <MovieList handleOpen={handleOpen} />
        </Styled.Container>
    );
}
