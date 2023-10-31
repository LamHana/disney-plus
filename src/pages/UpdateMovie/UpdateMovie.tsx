import React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { useFormik } from 'formik';
import { AddMovie, BtnLight } from '@pages/Dashboard/Dashboard.styled';
import requests from '@/utils/movieApi';
import { toastError, toastSuccess } from '@components/Toast';
import { Body, Container } from '@pages/AddMovie/AddMovie.styled';
import { useNavigate, useParams } from 'react-router-dom';
import { MovieType } from '@components/Movie/MovieList';
import { useAppSelector } from '@hooks/index';
import { selectMovies } from '@components/Movie/slice/movieSlice';
import Loading from '@components/Loading/Loading';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import configs from '@configs/index';

export default function UpdateMovie() {
    const { movieId } = useParams();
    const navigate = useNavigate();
    const [movieDetail, setMovieDetail] = React.useState<MovieType | null>(
        null
    );
    let movie = useAppSelector(selectMovies);
    if (movie.id == '') {
        movie = movieDetail || movie;
    }

    const getMovieDetail = async () => {
        try {
            const { data }: { data: MovieType } = await requests.getMovieDetail(
                movieId || movie.id
            );
            setMovieDetail(data);
        } catch (error) {
            toastError(error);
            // Handle the error, e.g., show an error message to the user.
        }
    };

    React.useEffect(() => {
        getMovieDetail();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [movieId]);

    const formik = useFormik({
        initialValues: {
            title: movieDetail?.title || '',
            type: movieDetail?.type || '',
            year: movieDetail?.subTitle.split('•')[0] || '',
            runningTime: movieDetail?.subTitle.split('•')[1] || '',
            genre: movieDetail?.genre || '',
            backgroundImg: movieDetail?.backgroundImg || '',
            cardImg: movieDetail?.cardImg || '',
            titleImg: movieDetail?.titleImg || '',
            video: movieDetail?.video || '',
            description: movieDetail?.description || '',
        },

        onSubmit: async (values) => {
            console.log(formik.initialValues);
            console.log(values);
            try {
                await requests.updateMovie({
                    id: movieDetail?.id || '',
                    backgroundImg: values.backgroundImg,
                    description: values.description,
                    cardImg: values.cardImg,
                    type: values.type,
                    title: values.title,
                    titleImg: values.titleImg,
                    subTitle: `${values.year} • ${values.runningTime}`,
                    genre: values.genre,
                    video: values.video,
                });
                toastSuccess('Update successfully');
            } catch (error) {
                toastError(error);
            }
        },
    });
    return (
        <Body>
            <Container>
                <React.Fragment>
                    <Typography
                        variant="h4"
                        gutterBottom
                        style={{
                            color: 'black',
                            marginTop: '30px',
                            display: 'flex',
                            justifyContent: 'center',
                        }}
                    >
                        Update moive
                    </Typography>
                    {movieDetail ? (
                        <form
                            style={{ marginBottom: '50px' }}
                            onSubmit={(e) => {
                                e.preventDefault(); // Prevent the default form submission
                                formik.handleSubmit(); // Trigger Formik's submission logic
                            }}
                        >
                            <Grid
                                container
                                spacing={3}
                            >
                                <Grid
                                    item
                                    xs={12}
                                >
                                    <TextField
                                        required
                                        id="title"
                                        // name="title"
                                        label="Movie Title"
                                        fullWidth
                                        variant="outlined"
                                        {...formik.getFieldProps('title')}
                                        value={formik.values.title}
                                    />
                                </Grid>

                                <Grid
                                    item
                                    xs={4}
                                >
                                    <TextField
                                        required
                                        id="type"
                                        name="type"
                                        label="Type"
                                        fullWidth
                                        variant="outlined"
                                        onChange={formik.handleChange}
                                    />
                                </Grid>
                                <Grid
                                    item
                                    xs={4}
                                >
                                    <TextField
                                        id="year"
                                        name="year"
                                        label="Year"
                                        fullWidth
                                        variant="outlined"
                                        onChange={formik.handleChange}
                                    />
                                </Grid>
                                <Grid
                                    item
                                    xs={4}
                                >
                                    <TextField
                                        id="runningTime"
                                        name="runningTime"
                                        label="Running Time"
                                        fullWidth
                                        variant="outlined"
                                        onChange={formik.handleChange}
                                    />
                                </Grid>
                                <Grid
                                    item
                                    xs={12}
                                >
                                    <TextField
                                        required
                                        id="genre"
                                        name="genre"
                                        label="Genre"
                                        fullWidth
                                        variant="outlined"
                                        onChange={formik.handleChange}
                                    />
                                </Grid>

                                <Grid
                                    item
                                    xs={12}
                                    sm={12}
                                >
                                    <TextField
                                        required
                                        id="backgroundImg"
                                        name="backgroundImg"
                                        label="Background Image"
                                        fullWidth
                                        variant="outlined"
                                        onChange={formik.handleChange}
                                    />
                                </Grid>
                                <Grid
                                    item
                                    xs={12}
                                    sm={12}
                                >
                                    <TextField
                                        required
                                        id="cardImg"
                                        name="cardImg"
                                        label="Poster"
                                        fullWidth
                                        variant="outlined"
                                        onChange={formik.handleChange}
                                    />
                                </Grid>
                                <Grid
                                    item
                                    xs={12}
                                    sm={12}
                                >
                                    <TextField
                                        required
                                        id="titleImg"
                                        name="titleImg"
                                        label="Title Image"
                                        fullWidth
                                        variant="outlined"
                                        onChange={formik.handleChange}
                                    />
                                </Grid>
                                <Grid
                                    item
                                    xs={12}
                                    sm={12}
                                >
                                    <TextField
                                        required
                                        id="video"
                                        name="video"
                                        label="Video"
                                        fullWidth
                                        variant="outlined"
                                        onChange={formik.handleChange}
                                    />
                                </Grid>
                                <Grid
                                    item
                                    xs={12}
                                >
                                    <TextField
                                        required
                                        id="description"
                                        name="description"
                                        label="Description"
                                        maxRows={4}
                                        fullWidth
                                        multiline
                                        variant="outlined"
                                        onChange={formik.handleChange}
                                    />
                                </Grid>
                                <AddMovie>
                                    <Grid
                                        item
                                        xs={12}
                                        sm={4}
                                    >
                                        <BtnLight
                                            onClick={() =>
                                                navigate(
                                                    configs.routes.dashboard
                                                )
                                            }
                                        >
                                            <ArrowBackIcon />
                                            <span>Back to dashboard</span>
                                        </BtnLight>
                                    </Grid>
                                    <Grid
                                        item
                                        xs={12}
                                        sm={2}
                                    >
                                        <BtnLight type="submit">
                                            <span>Update</span>
                                        </BtnLight>
                                    </Grid>
                                </AddMovie>
                            </Grid>
                        </form>
                    ) : (
                        <Loading />
                    )}
                </React.Fragment>
            </Container>
        </Body>
    );
}
