import configs from '@/configs';
import MainLayout from '@layouts/MainLayout';
import Home from '@pages/Home';
import WatchMovie from '@pages/WatchMovie';

const publicRoutes = [
    { id: 1, path: configs.routes.home, component: Home, layout: MainLayout },
    { id: 2, path: configs.routes.movie, component: Home, layout: MainLayout },
    {
        id: 3,
        path: configs.routes.movieId,
        component: Home,
        layout: MainLayout,
    },
    {
        id: 4,
        path: configs.routes.watchMovie,
        component: WatchMovie,
        layout: MainLayout,
    },
];

export { publicRoutes };
