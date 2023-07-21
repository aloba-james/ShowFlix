import { createSlice } from '@reduxjs/toolkit'

export const querySlice = createSlice({
  name: 'query',
  initialState: {
    currentQuery: '',
    data: [],
    isLoading: true
  },
  reducers: {
    setQuery: (state, action) => {      
      state.currentQuery = action.payload      
    },
    setData: (state, action) => {
        state.data = action.payload
        state.isLoading = false
    },
  }
})

export const { setQuery, setData } = querySlice.actions

export default querySlice.reducer