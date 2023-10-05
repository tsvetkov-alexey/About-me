import { configureStore } from '@reduxjs/toolkit';
import filter from './slices/filter';
import projects from './slices/projects';

export const store = configureStore({
  reducer: { filter, projects },
});
