import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  summary: false,
  nightMode: false,
  contacts: false,
  projectInfo: 0,
};

export const filter = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setSummary(state, action) {
      state.summary = action.payload;
    },
    setNightMode(state, action) {
      state.nightMode = action.payload;
    },
    setContacts(state, action) {
      state.contacts = action.payload;
    },
    setProjectInfo(state, action) {
      state.projectInfo = action.payload;
    },
  },
});

export const { setSummary, setNightMode, setContacts, setProjectInfo } = filter.actions;
export default filter.reducer;
