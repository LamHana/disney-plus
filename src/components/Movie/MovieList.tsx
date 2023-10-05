import { Container } from '@mui/material';
import React from 'react';
import { Content, Wrap } from './MoviceStyle.styled';
import { Link } from 'react-router-dom';
import { listOfFilms } from '@/data/ListOfFilms';

const MovieList = () => {
    return (
        <Container>
            <h2>Recommened for you</h2>
            <Content>
                {listOfFilms.map((movie) => (
                    <Wrap key={movie.id}>
                        <Link to={`/movie/${movie.id}`}>
                            <img src={movie.cardImg} />
                        </Link>
                    </Wrap>
                ))}
            </Content>
        </Container>
    );
};

export default MovieList;
