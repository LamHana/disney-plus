import { useState } from 'react';
import {
    Avatar,
    Box,
    Container,
    IconButton,
    Menu,
    MenuItem,
    Toolbar,
    Typography,
} from '@mui/material';

import LogoImg from '@assets/images/logo.svg';
import LogoDarkImg from '@assets/images/logoDark.png';
import HomeIcon from '@assets/images/home-icon.svg';
import WatchListIcon from '@assets/images/watchlist-icon.svg';
import OriginalIcon from '@assets/images/original-icon.svg';
import SeriesIcon from '@assets/images/series-icon.svg';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';

import * as Styled from './Header.styled';
import { Link, useNavigate } from 'react-router-dom';
import configs from '@configs/index';
import cookieUtils from '@/utils/cookieUtils';
import { useAppDispatch, useAppSelector } from '@hooks/index';
import { setUserLogin } from './slide/userSlice';
import { RoleEnum } from '@/utils/enum';
import { useGoogleLogin } from '@react-oauth/google';
import { getUserInfo } from '@/utils/userAPI';
import { Btn } from '@pages/Dashboard/Dashboard.styled';

const pages = [
    { id: 1, name: 'Home', icon: HomeIcon, link: '/' },
    { id: 2, name: 'WatchList', icon: WatchListIcon, link: '/watchlist' },
    { id: 3, name: 'Original', icon: OriginalIcon, link: '/original' },
    { id: 4, name: 'Series', icon: SeriesIcon, link: '/series' },
    { id: 5, name: 'Dashboard', icon: SeriesIcon, link: '/dashboard' },
];

export type UserInfoType = {
    email: string;
    email_verified: true;
    family_name: string;
    given_name: string;
    locale: string;
    name: string;
    picture: string;
    sub: string;
};

function Header() {
    const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
    const navigate = useNavigate();
    const [isDarkMode, setIsDarkMode] = useState(true);

    const dispatch = useAppDispatch();
    const user = useAppSelector((state) => state.user);
    const login = useGoogleLogin({
        onSuccess: async (tokenResponse) => {
            cookieUtils.setExpire(
                configs.cookies.expires_in,
                tokenResponse?.expires_in
            );
            cookieUtils.setAccessToken(
                configs.cookies.access_token,
                tokenResponse?.access_token
            );
            const userInfo: UserInfoType = await getUserInfo(
                tokenResponse.access_token
            );
            dispatch(
                setUserLogin({
                    name: userInfo.name,
                    email: userInfo.email,
                    role: RoleEnum.USER,
                    photo: userInfo.picture,
                })
            );
        },
    });
    const toggleDarkMode = () => {
        setIsDarkMode(!isDarkMode);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleOnClick = (link) => {
        navigate(`${link}`);
    };

    return (
        <Styled.Navbar
            position="sticky"
            $isDarkMode={isDarkMode}
        >
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Styled.Logo>
                        <Link to={`/`}>
                            <img
                                alt="logo"
                                src={isDarkMode ? LogoImg : LogoDarkImg}
                            />
                        </Link>
                    </Styled.Logo>

                    <Box
                        sx={{
                            flexGrow: 1,
                            display: { xs: 'flex', md: 'none' },
                        }}
                    >
                        {/* <ButtonIcon
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon />
                        </ButtonIcon> */}
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: { xs: 'block', md: 'none' },
                            }}
                        >
                            {pages.map((page) => (
                                <MenuItem
                                    key={page.id}
                                    onClick={handleCloseNavMenu}
                                >
                                    <Typography textAlign="center">
                                        <img
                                            src={page.icon}
                                            alt={page.name}
                                        />
                                        <Link to={page.link}>{page.name}</Link>
                                    </Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>

                    <Box
                        sx={{
                            flexGrow: 1,
                            display: { xs: 'none', md: 'flex' },
                        }}
                    >
                        {pages.map((page) => (
                            <Styled.ButtonNav
                                key={page.id}
                                onClick={() => handleOnClick(page.link)}
                                sx={{ my: 2, color: 'white', display: 'block' }}
                            >
                                <img
                                    src={page.icon}
                                    alt={page.name}
                                />
                                {page.name}
                            </Styled.ButtonNav>
                        ))}
                    </Box>
                    {/* <DarkModeToggle /> */}

                    <Box sx={{ flexGrow: 0, display: 'flex' }}>
                        <IconButton
                            sx={{ ml: 1 }}
                            onClick={toggleDarkMode}
                            color="inherit"
                        >
                            {isDarkMode ? (
                                <Brightness4Icon />
                            ) : (
                                <Brightness7Icon />
                            )}
                        </IconButton>
                        {/* <Tooltip title="Open settings"> */}
                        {user.role === RoleEnum.USER ? (
                            <IconButton sx={{ p: 0 }}>
                                <Avatar
                                    alt="Remy Sharp"
                                    src={user?.photo || ''}
                                />
                            </IconButton>
                        ) : (
                            <Btn onClick={() => login()}>
                                <span>Login</span>
                            </Btn>
                        )}
                    </Box>
                </Toolbar>
            </Container>
        </Styled.Navbar>
    );
}
export default Header;
