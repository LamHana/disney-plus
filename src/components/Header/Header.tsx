import { useState, createContext } from 'react';
import {
    Avatar,
    Box,
    Container,
    IconButton,
    Menu,
    MenuItem,
    Toolbar,
    Tooltip,
    Typography,
} from '@mui/material';

import LogoImg from '@assets/images/logo.svg';
import HomeIcon from '@assets/images/home-icon.svg';
import WatchListIcon from '@assets/images/watchlist-icon.svg';
import OriginalIcon from '@assets/images/original-icon.svg';
import SeriesIcon from '@assets/images/series-icon.svg';

import * as Styled from './Header.styled';
import { Link, useNavigate } from 'react-router-dom';
import { useTheme } from '@material-ui/core';
// import MenuIcon from '@mui/icons-material/Menu';
// import ButtonIcon from '@mui/material/IconButton'
const pages = [
    { id: 1, name: 'Home', icon: HomeIcon, link: '/' },
    { id: 2, name: 'WatchList', icon: WatchListIcon, link: '/watchlist' },
    { id: 3, name: 'Original', icon: OriginalIcon, link: '/original' },
    { id: 4, name: 'Series', icon: SeriesIcon, link: '/series' },
];

const ColorModeContext = createContext({ toggleColorMode: () => {} });

function Header() {
    const theme = useTheme();
    const colorMode = React.useContext(ColorModeContext);
    const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
    const [isDarkMode, setIsDa];
    const navigate = useNavigate();

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleOnClick = (link) => {
        navigate(`${link}`);
    };

    return (
        <Styled.Navbar position="sticky">
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Styled.Logo>
                        <Link to={`/`}>
                            <img
                                alt="logo"
                                src={LogoImg}
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

                    <Box sx={{ flexGrow: 0 }}>
                        <Tooltip title="Open settings">
                            <IconButton sx={{ p: 0 }}>
                                <Avatar
                                    alt="Remy Sharp"
                                    src="/static/images/avatar/2.jpg"
                                />
                            </IconButton>
                        </Tooltip>
                        {/* <Menu
                            sx={{ mt: '45px' }}
                            id="menu-appbar"
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                        ></Menu> */}
                    </Box>
                </Toolbar>
            </Container>
        </Styled.Navbar>
    );
}
export default Header;
