import { configureStore } from '@reduxjs/toolkit'
import saveGameSlice from '../features/saveGameSlice'
import navigateSlice from '../features/navigateSlice'

export const store = configureStore({
    reducer: {
        saveGame: saveGameSlice,
        navigate: navigateSlice,
    },
})