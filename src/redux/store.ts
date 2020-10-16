import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { createEpicMiddleware } from 'redux-observable';
import { rootEpic } from './rootEpic';
import reducers from './rootReducer';

const epicMiddleware = createEpicMiddleware();

const store = configureStore({
    reducer: reducers,
    middleware: getDefaultMiddleware({ serializableCheck: false }).concat(epicMiddleware)
})

// getDefaultMiddleware =>
//     getDefaultMiddleware()

epicMiddleware.run(rootEpic);

// Set up hot modue reloading
if (process.env.NODE_ENV === 'development' && module.hot) {
    module.hot.accept('./rootReducer', () => {
        const newRootReducer = require('./rootReducer').default
        store.replaceReducer(newRootReducer)
    })
}

export type AppDispatch = typeof store.dispatch

export default store
