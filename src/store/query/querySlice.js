import { createSlice } from '@reduxjs/toolkit'

export const querySlice = createSlice({
  name: 'query',
  initialState: {
    currentQuery: '',
  },
  reducers: {
    setQuery: (state, action) => {      
      state.currentQuery = action.payload
      console.log(action.payload);
    }
  }
})

export const { setQuery } = querySlice.actions

export default querySlice.reducer