import { RoleEnum } from '@/utils/enum';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export type initialStateType = {
    name: string | null;
    email: string | null;
    photo: string | null;
    role: string;
};

const initialState: initialStateType = {
    name: '',
    email: '',
    photo: '',
    role: RoleEnum.GUEST,
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUserLogin: (state, action: PayloadAction<initialStateType>) => {
            state.name = action.payload.name;
            state.email = action.payload.email;
            state.photo = action.payload.photo;
            state.role = RoleEnum.USER;
        },
        setSignOut: (state) => {
            state.name = null;
            state.email = null;
            state.photo = null;
            state.role = RoleEnum.GUEST;
        },
    },
});

export const { setUserLogin, setSignOut } = userSlice.actions;
export const selectUserName = (state) => state.user.name;
export const selectUserEmail = (state) => state.user.Email;
export const selectUserPhoto = (state) => state.user.photo;

export default userSlice.reducer;
