import styled from 'styled-components';

export const Container = styled.div`
    /* margin: 0 auto; */
    margin-top: 30px;
    display: grid;
    grid-gap: 25px;
    padding: 30px 0 25px;
    grid-template-columns: repeat(5, minmax(0, 1fr));
`;
export const Wrap = styled.div`
    border-radius: 10px;
    cursor: pointer;
    border: 3px solid rgba(249, 249, 249, 0.1);
    box-shadow: rgb(0 0 0 / 69%) 0 26px 30px -10px,
        rgb(0 0 0 / 73%) 0px 16px 10px -10px;
    transition: 0.3s ease all;
    /* position: absolute; */
    overflow: hidden;
    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        z-index: 99;
        transition: 0.3s ease all;
    }
    video {
        position: absolute;
        top: 0;
        left: 0;
        z-index: -99;
        width: 100%;
        height: 100%;
        border-radius: 10px;
        object-fit: cover;
        transition: 0.3s ease all;
    }

    &:hover {
        box-shadow: rgb(0 0 0 / 69%) 0 40px 58px -16px,
            rgb(0 0 0 / 73%) 0px 30px 22px -10px;
        transform: scale(1.05);
        border: 4px solid rgba(249, 249, 249, 0.8);
    }
`;
