import Cookies from 'universal-cookie';
import config from '@/configs';

const cookies = new Cookies(null, { path: '/' });

class CookieUtils {
    getItem(key: string, defaultValue = '') {
        const item = cookies.get(key);
        return item !== undefined ? item : defaultValue;
    }

    setAccessToken(key: string, value = '') {
        cookies.set(key, value, { path: '/' });
    }

    setExpire(key: string, value: number) {
        cookies.set(key, value, { path: '/' });
    }

    removeItem(key: string) {
        cookies.remove(key);
    }

    deleteUser() {
        cookies.remove(config.cookies.access_token);
    }

    getToken() {
        return this.getItem(config.cookies.access_token);
    }

    getExpire() {
        return this.getItem(config.cookies.expires_in);
    }

    setToken(value = '') {
        this.setAccessToken(config.cookies.access_token, value);
    }

    clear() {
        cookies.remove(config.cookies.access_token, { path: '/' });
    }
}

export default new CookieUtils();
