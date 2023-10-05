import * as Styled from './Carousel.style';
import SliderBadag from '@assets/images/slider-badag.jpg';
import SliderBadging from '@assets/images/slider-badging.jpg';
import SliderScale from '@assets/images/slider-scale.jpg';
import SliderScales from '@assets/images/slider-scales.jpg';

type CarouselItemType = {
    id: number;
    img: string;
};

const CarouselBanner = () => {
    const banners: CarouselItemType[] = [
        {
            id: 1,
            img: SliderBadag,
        },
        {
            id: 2,
            img: SliderBadging,
        },
        {
            id: 3,
            img: SliderScale,
        },
        {
            id: 4,
            img: SliderScales,
        },
    ];
    return (
        <Styled.CarouselBanner>
            {banners.map((banner) => {
                return <Styled.Banner src={banner.img} />;
            })}
        </Styled.CarouselBanner>
    );
};

export default CarouselBanner;
