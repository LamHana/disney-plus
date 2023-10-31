import { useCallback, useEffect, useState } from 'react';

import cookieUtils from '@/utils/cookieUtils';
import { RoleEnum } from '@/utils/enum';
import { useAppDispatch, useAppSelector } from '.';
import {
    initialStateType,
    setSignOut,
    setUserLogin,
} from '@components/Header/slide/userSlice';
import { getUserInfo } from '@/utils/userAPI';

// Function to get the role from the decoded JWT

const useAuth = () => {
    const [loading, setLoading] = useState(false);
    const userRedux = useAppSelector((state) => state.user);
    const [user, setUser] = useState<initialStateType | null>(userRedux);
    const token = cookieUtils.getToken();
    const expire = cookieUtils.getToken();
    const dispatch = useAppDispatch();

    // Function to check token expiration
    const checkTokenExpiration = useCallback(() => {
        if (expire) {
            // Check if the token is expired
            if (!expire || expire < Date.now() / 1000) {
                setUser(null);
                dispatch(setSignOut());
                cookieUtils.deleteUser();
                return;
            }
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [token]);

    useEffect(() => {
        const token = cookieUtils.getToken();

        // If there is no token, set the role to null
        if (!token) {
            setUser(null);
            dispatch(setSignOut());
            return;
        }

        const getInfo = async () => {
            try {
                setLoading(true);
                const userInfo = await getUserInfo(token);
                setUser({
                    name: userInfo.name,
                    email: userInfo.email,
                    role: RoleEnum.USER,
                    photo: userInfo.picture,
                });
                dispatch(
                    setUserLogin({
                        name: userInfo.name,
                        email: userInfo.email,
                        role: RoleEnum.USER,
                        photo: userInfo.picture,
                    })
                );
            } catch (error) {
                setLoading(false);
                console.log(error);
            }
        };

        getInfo();

        // Set up an interval to check token expiration every 5 seconds
        const intervalId = setInterval(checkTokenExpiration, 5000);

        // Clean up the interval on component unmount
        return () => clearInterval(intervalId);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [checkTokenExpiration]);

    return { loading, user };
};

export default useAuth;
