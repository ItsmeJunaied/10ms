import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  lang: 'bn',
};

const languageSlice = createSlice({
  name: 'language',
  initialState,
  reducers: {
    setLanguage: (state, action) => {
      state.lang = action.payload;
    },
    toggleLanguage: (state) => {
      state.lang = state.lang === 'bn' ? 'en' : 'bn';
    },
  },
});

export const { setLanguage, toggleLanguage } = languageSlice.actions;
export default languageSlice.reducer; 