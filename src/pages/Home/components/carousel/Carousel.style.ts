import styled from 'styled-components';
import Carousel from 'react-material-ui-carousel';
export const Banner = styled.img`
    border: 4px solid transparent;
    width: 100%;
    height: 100%;
    border-radius: 4px;
    overflow: hidden;
    box-shadow: rgb(0 0 0 / 69%) 0 26px 30px -10px,
        rgb(0 0 0 / 73%) 0px 16px 10px -10px;
    transition: 0.3s ease all;
    &:hover {
        border: 4px solid rgba(249, 249, 249, 0.8);
    }
`;

export const CarouselBanner = styled(Carousel)`
    width: 100%;
    margin-top: 20px;
    svg {
        font-size: 10px;
        color: rgba(150, 158, 171);
    }
    button {
        margin: 10px;
    }
`;
