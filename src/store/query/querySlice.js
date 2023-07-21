import { createSlice } from '@reduxjs/toolkit'
import { useEffect } from 'react'

export const querySlice = createSlice({
  name: 'query',
  initialState: {
    currentQuery: '',
    data: [],
    loading: false
  },
  reducers: {
    setQuery: (state, action) => {      
      state.currentQuery = action.payload      
    },
    setData: (state, action) => {
        state.data = action.payload     
    },
    setLoading: (state, action) => {
        state.loading = action.payload
    }
  }
})

export const { setQuery, setData, setLoading } = querySlice.actions

export default querySlice.reducer