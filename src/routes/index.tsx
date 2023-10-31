import configs from '@/configs';
import MainLayout from '@layouts/MainLayout';
import Home from '@pages/Home';
import Original from '@pages/Original';
import Series from '@pages/Series';
import WatchList from '@pages/WatchList';
import WatchMovie from '@pages/WatchMovie';
import {
    createBrowserRouter,
    Navigate,
    RouterProvider,
} from 'react-router-dom';
import GuestRoute from './GuestRoute';
import UserRoute from './UserRoute';
import Dashboard from '@pages/Dashboard';
import AddMovie from '@pages/AddMovie';
import UpdateMovie from '@pages/UpdateMovie';

const page = [
    {
        exact: true,
        path: configs.routes.home,
        element: <Home />,
    },
    {
        exact: true,
        path: configs.routes.movie,
        element: <Home />,
    },
    {
        exact: true,
        path: configs.routes.movieId,
        element: <Home />,
    },
    {
        exact: true,
        path: configs.routes.watchMovie,
        element: <WatchMovie />,
    },
    {
        exact: true,
        path: configs.routes.watchList,
        element: <WatchList />,
    },
    {
        exact: true,
        path: configs.routes.original,
        element: <Original />,
    },
    {
        exact: true,
        path: configs.routes.series,
        element: <Series />,
    },
];

const route = [
    { path: '/', element: <Navigate to="home" /> },
    {
        path: '/',
        element: <GuestRoute />,
        children: [
            {
                exact: true,
                element: <MainLayout />,
                children: page,
            },
        ],
    },
    {
        path: '/',
        element: <UserRoute />,
        children: [
            {
                exact: true,
                element: <MainLayout />,
                children: [
                    ...page,
                    {
                        exact: true,
                        path: configs.routes.dashboard,
                        element: <Dashboard />,
                    },
                    {
                        exact: true,
                        path: configs.routes.addMovie,
                        element: <AddMovie />,
                    },
                    {
                        exact: true,
                        path: configs.routes.updateMovie,
                        element: <UpdateMovie />,
                    },
                ],
            },
        ],
    },
];

const RouterComponent = () => {
    const router = createBrowserRouter(route);

    return <RouterProvider router={router} />;
};

export default RouterComponent;
