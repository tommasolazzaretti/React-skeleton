import AppReducer, { AppState } from './AppStore/AppStore';
import AuthReducer, { AuthState } from './AuthStore/AuthStore';
import UIReducer, { UIState } from './UIStore/UIStore';

const rootReducer = {
    app: AppReducer,
    auth: AuthReducer,
    uistate: UIReducer
}

export type RootState = {
    app: AppState;
    auth: AuthState;
    uistate: UIState;
}

export default rootReducer
