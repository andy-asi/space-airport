import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';

import rootReducer from './slices/index'

// import { createStore, combineReducers, compose } from 'redux';

// const { NODE_ENV } = process.env;
// const isDevelopment = NODE_ENV === 'development';

// const reducers = {
//     spaceData: (oldState = {}, action) => {
//         const { type } = action;
//         switch (type) {
//             default:
//                 return oldState;
//         }
//     },
// };

// const slices = combineReducers({ ...reducers });

// const composeEnhancers = isDevelopment && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
//     ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({ trace: true, traceLimit: 25 })
//     : compose;


const store = configureStore({
    reducer: rootReducer,
    // middleware: [sagaMiddleware, ...getDefaultMiddleware({ thunk: false })],
    // devTools: process.env.NODE_ENV !== 'production',
})

if (process.env.NODE_ENV !== 'production' && module.hot) {
    module.hot.accept('./slices', () => store.replaceReducer(rootReducer))
  }

// const store = createStore(
//     slices,
//     composeEnhancers(),
// );

export default store;
