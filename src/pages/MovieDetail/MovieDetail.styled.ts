import Modal from '@mui/material/Modal';
import styled from 'styled-components';
import AddIcon from '@mui/icons-material/Add';
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import HdOutlinedIcon from '@mui/icons-material/HdOutlined';
import SubtitlesOutlinedIcon from '@mui/icons-material/SubtitlesOutlined';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';

export const Wrapper = styled.div`
    width: 100%;
    position: relative;
`;

export const MovieModal = styled(Modal)`
    .MuiBox-root {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 850px;
        border-radius: 8px;
        background-color: #0b0b0c;
    }
`;

export const ModalBanner = styled.div<{ url: string }>`
    height: 450px;
    /* background-color: red; */
    background-image: ${({ url }) => (url ? `url(${url})` : null)};
    background-size: cover;
    background-position: center center;
    object-fit: contain;
    /* position: relative; */
    z-index: 1;
    overflow: hidden;
    border-radius: 8px 8px 0 0;
`;

export const Content = styled.div`
    width: 100%;
    height: 100%;
    background: linear-gradient(0deg, #181818, transparent 50%);
    /* position: relative; */
`;

export const BannerContent = styled.div`
    position: absolute;
    top: 20%;
    left: 5%;
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
`;

export const MovieName = styled.img`
    color: white;
    font-size: 3rem;
    font-weight: bold;
    max-width: 350px;
`;

export const MovieButton = styled.div`
    display: flex;
    margin-top: 1.5vw;
    button:first-child {
        color: black;
        background-color: white;
    }
    button:first-child:hover {
        background-color: rgba(255, 255, 255, 0.75);
    }
    button {
        display: flex;
        justify-content: space-between;
        align-items: center;
        color: #fff;
        outline: none;
        border: none;
        font-weight: bold;
        font-size: 1.2rem;
        border-radius: 0.2vw;
        padding: 0.5rem 1rem;
        background-color: rgba(109, 109, 110, 0.7);
        margin-right: 1rem;
        margin-bottom: 1rem;
    }
    button:hover {
        background-color: rgba(109, 109, 110, 0.4);
    }
`;

export const Blank = styled.div`
    width: 1rem;
`;
export const MyAddIcon = styled(AddIcon)`
    color: white;
    background-color: rgba(30, 30, 20, 0.5);
    border: 1px solid rgba(255, 255, 255, 0.7);
    border-radius: 2em;
    font-size: 40px !important;
    margin-right: 1rem;
    &:hover {
        background-color: #2a2a2a;
        border-color: white;
    }
`;

export const LikeIcon = styled(ThumbUpOutlinedIcon)`
    color: white;
    background-color: rgba(30, 30, 20, 0.5);
    border: 1px solid rgba(255, 255, 255, 0.7);
    border-radius: 2em;
    padding: 0.5rem;
    font-size: 14px;
    &:hover {
        background-color: #2a2a2a;
        border-color: white;
    }
`;

export const ModalContent = styled.div`
    margin-bottom: 3rem;
    margin-top: 2rem;
    padding: 0 2rem;
`;

export const MovieInfo = styled.div`
    display: flex;
    justify-content: space-between;
`;

export const HDIcon = styled(HdOutlinedIcon)`
    color: white;
    margin-right: 1em;
`;
export const SubIcon = styled(SubtitlesOutlinedIcon)`
    color: white;
`;

export const Desc = styled.div`
    font-size: 17px;
`;
export const GenreList = styled.div`
    display: flex;
    margin-bottom: 2em;
`;
export const Genre = styled.div`
    margin-right: 1em;
    font-size: 14px;
`;

export const Age = styled.div`
    border: 1px solid hsla(0, 0%, 100%, 0.4);
    padding: 0 0.4em;
    margin-right: 1em;
`;

export const Title = styled.span`
    color: #777;
`;

export const Text = styled.span`
    margin-right: 0.2em;
`;

export const Cast = styled.div`
    margin-bottom: 1em;
`;

export const Genres = styled.div`
    display: flex;
`;

export const SuggestMovie = styled.div``;

export const Hero = styled.h1``;

export const MovieList = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 2rem;
`;

export const MovieCard = styled.div`
    border-radius: 0.2rem;
    background-color: #2f2f2f;
    overflow: hidden;
    cursor: pointer;
    &:hover .icon {
        opacity: 1;
    }
`;

export const TopCard = styled.div`
    position: relative;
`;
export const Picture = styled.img`
    width: 100%;
    height: 100px;
`;
export const BottomCard = styled.div`
    padding: 0.5rem 1rem 1rem;
    h3 {
        margin-bottom: 0.5rem;
    }
`;

export const DescCard = styled.p`
    color: #d2d2d2;
`;
export const Icon = styled.div`
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    opacity: 0;
    transition: opacity 0.2s ease-in;
`;
export const PlayIcon = styled(PlayArrowIcon)`
    color: white;
    background-color: rgba(30, 30, 20, 0.5);
    border: 1px solid #fff;
    border-radius: 2em;
    font-size: 3rem !important;
`;

export const Rating = styled.div`
    color: #46d369;
    font-weight: 500;
    margin-right: 1em;
    font-size: 16px;
`;

export const CloseIcon = styled(CloseOutlinedIcon)`
    position: absolute;
    right: 0;
    top: 0;
    color: white;
    border-radius: 2em;
    background-color: #181818;
    font-size: 2.5rem !important;
`;

export const ModalFooter = styled.footer``;

export const AboutMovie = styled.h1`
    margin-top: 4rem;
    font-weight: 400;
    margin-bottom: 2rem;
    span {
        font-weight: bold;
    }
`;

export const ModalFooterContent = styled.div``;

export const Company = styled.div`
    margin-bottom: 1em;
`;

export const MaturityRating = styled.div`
    margin-top: 1em;
    display: flex;

    div {
        display: flex;
    }
`;

export const MovieInfoTop = styled.div`
    display: flex;
    flex-wrap: wrap;
`;
