import { configureStore } from '@reduxjs/toolkit';
// import settingsReducer from '../features/settings/Slice/settingsSlice'; // Import your reducer(s) here

const store = configureStore({
  reducer: {
    // settings: settingsReducer, 
    
  },
});

export default store;