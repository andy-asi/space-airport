import { combineReducers } from '@reduxjs/toolkit'

import spaceReducer from './space';

const rootReducer = combineReducers({
  spaceState: spaceReducer,
})

export default rootReducer;
