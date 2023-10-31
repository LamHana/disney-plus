import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { Body, Container } from './AddMovie.styled';
import { useFormik } from 'formik';
import {
    AddMovie as FlexEnd,
    BtnLight,
} from '@pages/Dashboard/Dashboard.styled';
import requests from '@/utils/movieApi';
import { toastError, toastSuccess } from '@components/Toast';
import configs from '@configs/index';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate } from 'react-router-dom';

export default function AddMovie() {
    const navigate = useNavigate();
    const formik = useFormik({
        initialValues: {
            title: '',
            type: '',
            year: '',
            runningTime: '',
            genre: '',
            backgroundImg: '',
            cardImg: '',
            titleImg: '',
            video: '',
            description: '',
        },

        onSubmit: async (values) => {
            console.log(values);
            try {
                await requests.createMovie({
                    id: '',
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
                toastSuccess('Add successfully');
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
                        Add moive
                    </Typography>

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
                            <FlexEnd>
                                <Grid
                                    item
                                    xs={12}
                                    sm={4}
                                >
                                    <BtnLight
                                        onClick={() =>
                                            navigate(configs.routes.dashboard)
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
                                    <BtnLight
                                        type="submit"
                                        style={{
                                            paddingLeft: '40px',
                                            paddingRight: '40px',
                                        }}
                                    >
                                        <span>Add</span>
                                    </BtnLight>
                                </Grid>
                            </FlexEnd>
                        </Grid>
                    </form>
                </React.Fragment>
            </Container>
        </Body>
    );
}
