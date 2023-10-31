import { UserInfoType } from '@components/Header/Header';
import axios from 'axios';

export const getUserInfo = async (access_token: string) => {
    const userInfo: UserInfoType = await axios
        .get('https://www.googleapis.com/oauth2/v3/userinfo', {
            headers: {
                Authorization: `Bearer ${access_token}`,
            },
        })
        .then((res) => res.data);
    return userInfo;
};
