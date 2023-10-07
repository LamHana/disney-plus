import styled from 'styled-components';
import { AppBar, Button } from '@mui/material';
export const Logo = styled.div`
    margin-right: 10px;
    img {
        width: 100px;
    }
    /* width: 80px; */
`;

export const Navbar = styled(AppBar)`
    background: #090b13 !important;
`;

export const ButtonNav = styled(Button)`
    display: flex !important;
    column-gap: 5px;
    img {
        width: 20px;
    }
`;
