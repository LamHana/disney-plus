import { RoleEnum } from '@/utils/enum';
import useAuth from '@hooks/useAuth';
import { GridColDef } from '@mui/x-data-grid';
import * as Style from './Dashboard.styled';
import requests from '@/utils/movieApi';
import { MovieType } from '@components/Movie/MovieList';
import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import EditIcon from '@mui/icons-material/Edit';
import { useAppDispatch } from '@hooks/index';
import { setMovieId } from '@components/Movie/slice/movieSlice';
import configs from '@configs/index';
import Loading from '@components/Loading/Loading';
import { toastError, toastSuccess } from '@components/Toast';

interface Data {
    no: number;
    id: string;
    description: string;
    cardImg: string;
    title: string;
    subTitle: string;
    genre: string;
    titleImg: string;
}

function createData(
    no: number,
    id: string,
    description: string,
    cardImg: string,
    title: string,
    subTitle: string,
    genre: string,
    titleImg: string
): Data {
    return {
        no,
        id,
        description,
        cardImg,
        title,
        subTitle,
        titleImg,
        genre,
    };
}

const Dashboard = () => {
    const [movieList, setMovieList] = useState<MovieType[]>([]);
    const navigate = useNavigate();
    const dispatch = useAppDispatch();

    const handleOnClick = (movieId) => {
        dispatch(setMovieId(movieId));
    };

    const columns: GridColDef[] = [
        { field: 'no', headerName: 'No', width: 70 },
        { field: 'id', headerName: 'ID', width: 10 },
        {
            field: 'title',
            headerName: 'Movie name',
            width: 150,
        },
        {
            field: 'subTitle',
            headerName: 'Year - Running Time',
            width: 150,
        },
        {
            field: 'genre',
            headerName: 'Genre',
            width: 350,
        },
        {
            field: 'description',
            headerName: 'Description',
            width: 335,
            cellClassName: 'description-cell',
        },
        {
            field: 'cardImg',
            headerName: 'Card Img',
            width: 110,
            renderCell: (params) => (
                <img
                    src={params.value}
                    alt="Image"
                    width={80}
                    height={80}
                    style={{ objectFit: 'contain' }}
                />
            ),
        },
        {
            field: 'titleImg',
            headerName: 'Title mg',
            width: 110,
            renderCell: (params) => (
                <img
                    src={params.value}
                    alt="Image"
                    width={80}
                    height={80}
                    style={{ objectFit: 'contain' }}
                />
            ),
        },
        {
            field: 'action',
            headerName: 'Action',
            width: 110,
            renderCell: (params) => (
                <Style.ActionList>
                    <Link
                        to={`/edit/${params.id}`}
                        onClick={() => {
                            handleOnClick(params.id);
                        }}
                    >
                        <EditIcon />
                    </Link>
                    <div
                        onClick={() => {
                            handleDelete(params.id);
                        }}
                    >
                        <Style.RemoveIcon />
                    </div>
                </Style.ActionList>
            ),
        },
    ];

    async function fetchMovieList() {
        try {
            const { data }: { data: MovieType[] } =
                await requests.getAllMovie();
            setMovieList(data);
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        fetchMovieList();
    }, []);

    const handleDelete = async (movieId) => {
        try {
            await requests.deleteMovie(movieId.toString());
            toastSuccess('Delete Successfully');
            fetchMovieList();
        } catch (error) {
            toastError(error);
        }
    };
    console.log(movieList);
    const rows = movieList?.map((movie, index) => {
        return createData(
            index + 1,
            movie.id,
            movie.description,
            movie.cardImg,
            movie.title,
            movie.subTitle,
            movie.genre,
            movie.titleImg
        );
    });
    const { user } = useAuth();
    if (user?.role === RoleEnum.USER) {
        return (
            <Style.Container>
                <Style.AddMovie>
                    <Style.Btn
                        onClick={() => navigate(configs.routes.addMovie)}
                    >
                        <Style.PlusIcon />
                        <span>Add movie</span>
                    </Style.Btn>
                </Style.AddMovie>

                {movieList.length > 0 ? (
                    <div
                        style={{
                            height: 650,
                            width: '100%',
                            marginTop: '30px',
                        }}
                    >
                        <Style.Table
                            rows={rows}
                            columns={columns}
                            rowHeight={100}
                            initialState={{
                                pagination: {
                                    paginationModel: { page: 0, pageSize: 5 },
                                },
                            }}
                            pageSizeOptions={[5, 10]}
                        />
                    </div>
                ) : (
                    <Loading />
                )}
            </Style.Container>
        );
    }
};

export default Dashboard;
