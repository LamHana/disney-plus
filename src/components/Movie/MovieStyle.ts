import styled from 'styled-components';

export const Container = styled.div``;
export const Content = styled.div`
    display: grid;
    grid-template-columns: repeat(4, minmax(0, 1fr));
    grid-gap: 25px;
`;
export const Wrap = styled.div`
    border-radius: 10px;
    overflow: hidden;
    border: 3px solid rgba(249, 249, 249, 0.1);
    box-shadow: rgb(0 0 0 / 69%) 0 26px 30px -10px,
        rgb(0 0 0 / 73%) 0px 16px 10px -10px;
    transition: 0.3s ease all;
    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
    &:hover {
        transform: scale(1.05);
        border: 3px solid rgba(249, 249, 249, 0.8);
    }
`;
