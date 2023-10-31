import styled, { css } from 'styled-components';
import { AppBar, Button } from '@mui/material';
export const Logo = styled.div`
    margin-right: 10px;
    img {
        width: 100px;
    }
    /* width: 80px; */
`;

export const Navbar = styled(AppBar)<{ $isDarkMode: boolean }>`
    background: #fff !important;
    button {
        color: #090b13 !important;
    }
    ${(props) =>
        props.$isDarkMode &&
        css`
            button {
                color: #fff !important;
            }
            background: #090b13 !important;
        `};
`;

export const ButtonNav = styled(Button)`
    display: flex !important;
    column-gap: 5px;
    img {
        width: 20px;
    }
`;
