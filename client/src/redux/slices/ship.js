import { createSlice } from '@reduxjs/toolkit';

export const initialState = {
  currentUser: {},
  isAuthenticated: false,
  error: '',
  loading: true,
}

const shipSlice = createSlice({
  name: 'ship',
  initialState,
  reducers: {
    login: (state) => {
      state.loading = true
    },

    loginSuccess: (state, { payload }) => {
      state.currentUser = payload
      state.isAuthenticated = true
      state.loading = false
    },

    loginError: (state, { payload }) => {
      state.error = payload
      state.isAuthenticated = false
      state.loading = false
    },

    logout: (state) => {
      state.loading = true
    },

    logoutSuccess: (state) => {
      state.isAuthenticated = false
      state.currentUser = {}
      state.error = ''
      state.loading = false
    },
  },
})

export const { login, loginSuccess, loginError, logout, logoutSuccess } = shipSlice.actions;

export default shipSlice.reducer;
