import { combineEpics } from "redux-observable";
import AppEpics from './AppStore/epics/AppEpics';


export const rootEpic: any = combineEpics(
    ...AppEpics
)