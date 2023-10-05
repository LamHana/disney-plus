import MovieList from '@components/Movie/MovieList';
import CarouselBanner from './components/carousel/Carousel';
import * as Styled from './Home.styled';
import Viewers from './components/viewers/viewers';

export default function Home() {
    return (
        <Styled.Container>
            <CarouselBanner />
            <Viewers />
            <MovieList />
        </Styled.Container>
    );
}
