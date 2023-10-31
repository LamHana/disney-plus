import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { Provider } from 'react-redux';
import { store } from '@/store/store.ts';
import { GoogleOAuthProvider } from '@react-oauth/google';

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <GoogleOAuthProvider clientId="887207475788-15llvl5iov5b8tosak1glovllui976k5.apps.googleusercontent.com">
            <Provider store={store}>
                <App />
            </Provider>
        </GoogleOAuthProvider>
    </React.StrictMode>
);
