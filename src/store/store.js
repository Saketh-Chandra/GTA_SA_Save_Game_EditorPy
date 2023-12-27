import { configureStore } from '@reduxjs/toolkit'
import saveGameSlice from '../features/saveGameSlice'

export const store = configureStore({
    reducer: {
        saveGame: saveGameSlice,
    },
})