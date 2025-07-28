
import { configureStore } from '@reduxjs/toolkit';
import { ieltsCourseApi } from './ieltsApi';
import languageReducer from './languageSlice';


export const store = configureStore({
  reducer: {
    [ieltsCourseApi.reducerPath]: ieltsCourseApi.reducer,
    language: languageReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(ieltsCourseApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
