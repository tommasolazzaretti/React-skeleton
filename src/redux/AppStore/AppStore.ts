import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface AppState {
    loading: boolean,
    loadingMsg: string | undefined,
    error?: { message: string, details?: { message?: string, code?: string } }
}

const appSlice = createSlice({
    name: 'app',
    initialState: {
        loading: false,
    } as AppState,
    reducers: {
        setAppState(state: AppState, { payload }: PayloadAction<AppState>) {
            return {
                ...state,
                ...payload
            }
        },
        setAppLoading(state: AppState, { payload }: PayloadAction<{ loading: boolean, loadingMsg?: string }>) {
            state.loading = payload.loading;
            state.loadingMsg = payload.loadingMsg;
        },
        toggleAppLoading(state: AppState, { payload }: PayloadAction<{ loadingMsg?: string }>) {
            state.loading = !state.loading;
            state.loadingMsg = payload.loadingMsg;
        },
        setAppError(state: AppState, { payload }: PayloadAction<{ message: string, details?: { message?: string, code?: string } }>) {
            state.error = payload
        }
    }
})

export const { setAppState, setAppLoading, toggleAppLoading, setAppError } = appSlice.actions

export default appSlice.reducer

// Async Actions
export const APP_TRY_SET_APP_ERROR = 'APP_TRY_SET_APP_ERROR';

export function trySetAppError({ message, code }: { message: string, code?: string }) {
    return {
        type: APP_TRY_SET_APP_ERROR,
        payload: { message }
    }
}
