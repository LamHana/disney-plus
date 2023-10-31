import styled from 'styled-components';

export const Loading = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`;

export const ProgressSpin = styled.div`
    height: 72px;
    width: 72px;

    &::before {
        animation: progressSpin 0.8s linear infinite;
        background-image: url(https://static-assets.bamgrid.com/product/disneyplus/images/disney-circular-loader.665d0aa1d24f682fed030803f4e96e2f.png);
        background-size: contain;
        content: '';
        height: 100%;
        left: 0;
        position: absolute;
        top: 0;
        width: 100%;
    }
`;
