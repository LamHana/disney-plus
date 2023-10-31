import movieReducer from '@components/Movie/slice/movieSlice';
import userReducer from '@components/Header/slide/userSlice';

import { configureStore } from '@reduxjs/toolkit';

export const store = configureStore({
    reducer: {
        movie: movieReducer,
        user: userReducer,
    },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
