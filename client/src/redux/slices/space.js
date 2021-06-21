import { createSlice, createAsyncThunk, isAnyOf } from '@reduxjs/toolkit';
import axios from 'axios';

export const initialState = {
  capsules: [],
  landingPad: null,
  mode: 'capsules',
  status: 'idle',
  error: null,
};

export const fetchCapsules = createAsyncThunk('space/fetchCapsules', async () => {
  const res = await axios.get('http://localhost:4000/capsules');
  return res.data;
});

export const fetchLandingPad = createAsyncThunk('space/fetchLandingPad', async (padId) => {
  const res = await axios.get(`http://localhost:4000/landing/${padId}`);
  return res.data;
});

const spaceSlice = createSlice({
  name: 'space',
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCapsules.fulfilled, (state, { payload }) => {
        state.status = 'succeeded';
        state.capsules = payload;
        state.mode = "capsules";
      })
      .addCase(fetchLandingPad.fulfilled, (state, { payload }) => {
        state.status = 'succeeded';
        state.landingPad = payload;
        state.mode = "landingPad";
      })
      .addMatcher(isAnyOf(fetchCapsules.pending, fetchLandingPad.pending), (state) => {
        state.status = 'loading';
      })
      .addMatcher(isAnyOf(fetchCapsules.rejected, fetchLandingPad.rejected), (state, { error }) => {
        state.status = 'failed';
        state.error = error.message;
      })
  }
});

export const { getAllCapsules, getLandingPad } = spaceSlice.actions;

export default spaceSlice.reducer;
