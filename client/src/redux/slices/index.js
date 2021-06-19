import { combineReducers } from '@reduxjs/toolkit'

import shipReducer from './ship';

const rootReducer = combineReducers({
  shipState: shipReducer,
})

export default rootReducer;
