import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { Body, Container } from './AddMovie.styled';
import { useFormik } from 'formik';
import { Btn } from '@pages/Dashboard/Dashboard.styled';

export default function AddMovie() {
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

        onSubmit: (values) => {
            console.log(values);
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
                            <Grid
                                item
                                xs={12}
                            >
                                <Btn type="submit">add</Btn>
                            </Grid>
                        </Grid>
                    </form>
                </React.Fragment>
            </Container>
        </Body>
    );
}
