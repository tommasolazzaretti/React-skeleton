
import { ofType, StateObservable } from "redux-observable";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { RootState } from "../../rootReducer";
import { APP_TRY_SET_APP_ERROR, setAppError } from "../AppStore";


export function trySetAppErrorEpic(action$: Observable<any>, state: StateObservable<RootState>) {
    return action$.pipe(
        ofType(APP_TRY_SET_APP_ERROR),
        map((action) => {
            console.log("[trySetAppErrorEpic]", state?.value, action)
            const appError: any = {}
            appError.message = action.payload?.message;
            appError.details = { code: action.payload?.code }
            return setAppError({
                message: action.payload?.message,
                details: { code: action.payload?.code }
            });
        })
    )
}

export default [trySetAppErrorEpic]