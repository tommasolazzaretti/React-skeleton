import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface AuthState {
    authenticated: boolean;
    userId: string;
    email?: string;
    customer?: string;
    roles?: string[];
    // access_token?: string;
    // refresh_token?: string;
}

interface SetAuthPayload {
    userId?: string;
    email?: string;
    customer?: string;
    roles?: string[];
}

const initialState: AuthState = {
    authenticated: false,
    userId: '',
    email: undefined,
    customer: undefined,
    roles: undefined
}

const authSlice = createSlice({
    name: 'auth',
    initialState: initialState,
    reducers: {
        setAuth(state: AuthState, { payload }: PayloadAction<SetAuthPayload>) {
            return {
                ...state,
                ...payload,
                authenticated: true
            }
        },
        removeAuth(state: AuthState) {
            return {
                ...state,
                ...initialState
            }
        }
    }
})

export const { setAuth, removeAuth } = authSlice.actions

export default authSlice.reducer
