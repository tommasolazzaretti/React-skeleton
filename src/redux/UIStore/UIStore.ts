import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface UIState {
    themeLoaded?: boolean,
    layoutLoaded?: boolean,
    showModal?: boolean,
    showFloatingButton?: boolean,
    moduleLoading?: boolean
}

const uiSlice = createSlice({
    name: 'uistate',
    initialState: {} as UIState,
    reducers: {
        setUIState(state: UIState, { payload }: PayloadAction<UIState>) {
            return {
                ...state,
                ...payload
            }
        },
        setModuleLoading(state: UIState, { payload }: PayloadAction<boolean>) {
            state.moduleLoading = payload
        },
        setThemeLoaded(state: UIState, { payload }: PayloadAction<boolean>) {
            state.themeLoaded = payload
        },
        setLayoutLoaded(state: UIState, { payload }: PayloadAction<boolean>) {
            state.layoutLoaded = payload
        },
        setUILoaded(state: UIState, { payload }: PayloadAction<boolean>) {
            state.layoutLoaded = payload
            state.themeLoaded = payload
        },
        setShowModal(state: UIState, { payload }: PayloadAction<boolean>) {
            state.showModal = payload
        }
    }
})

export const { setUIState, setModuleLoading, setThemeLoaded, setLayoutLoaded, setUILoaded, setShowModal } = uiSlice.actions

export default uiSlice.reducer
