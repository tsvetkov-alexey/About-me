import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from '../../axios';

export const fetchProjects = createAsyncThunk('projects/fetchProjects', async () => {
  const { data } = await axios.get('/ProjectsInfo');
  return data;
});

const initialState = {
  projects: [],
  status: 'loading',
};

export const projects = createSlice({
  name: 'projects',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProjects.pending, (state) => {
        state.status = 'loading';
        state.projects = [];
      })
      .addCase(fetchProjects.fulfilled, (state, action) => {
        state.status = 'success';
        state.projects = action.payload;
      })
      .addCase(fetchProjects.rejected, (state) => {
        state.status = 'error';
        state.projects = [];
      });
  },
});

export default projects.reducer;
