import { createSlice } from '@reduxjs/toolkit'

const initialState =
{
    currentPageIndex: 0,
}


export const navigateSlice = createSlice({
    name: 'navigateSlice',
    initialState,
    reducers: {
        setCurrentPageIndex: (state, action) => {
            console.log('action.payload Index', action.payload)
            state.currentPageIndex = action.payload
        },
        reset: (state) => {
            state = initialState
        }
    }

})

// Action creators are generated for each case reducer function
export const {
    setCurrentPageIndex,
} = navigateSlice.actions

export default navigateSlice.reducer;