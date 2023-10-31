import { RoleEnum } from '@/utils/enum';
// import { useAppSelector } from '@hooks/index';
import useAuth from '@hooks/useAuth';
import { Navigate, Outlet } from 'react-router-dom';

const UserRoute = () => {
    const { user } = useAuth();
    // const user2 = useAppSelector((state) => state.user);
    // console.log(user);

    return user?.role === RoleEnum.USER ? (
        <Outlet />
    ) : (
        <Navigate
            to="/addMovie"
            replace
        />
    );
};

export default UserRoute;
