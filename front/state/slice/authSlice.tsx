import { createSlice } from '@reduxjs/toolkit';
import { PayloadAction } from '@reduxjs/toolkit';

interface initialAuthState {
    name: string;
    email: string;
    token: string;
}

const initialState: initSialauthState = {
    name: '',
    email: '',
    token: '',
};

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        getUserName: (state, action: PayloadAction) => {
            state.name = action.payload;
        },
        getUserEmail: (state, action: PayloadAction) => {
            state.email = action.payload;
        },
        getUserToken: (state, action: PayloadAction) => {
            state.token = action.payload;
        },
    },
});

export const { getUserName, getUserEmail, getUserToken } = authSlice.actions;
export default authSlice.reducer;
