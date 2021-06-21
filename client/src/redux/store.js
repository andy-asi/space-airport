import { configureStore } from '@reduxjs/toolkit';

import rootReducer from './slices/index';

const store = configureStore({
  reducer: rootReducer,
});

if (process.env.NODE_ENV !== 'production' && module.hot) {
  module.hot.accept('./slices', () => store.replaceReducer(rootReducer))
}

export default store;
