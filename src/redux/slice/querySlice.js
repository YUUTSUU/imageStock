import {createSlice} from '@reduxjs/toolkit'

const querySlice = createSlice({
  name: 'query',
  initialState: {
    query: '',
  },
  reducers: {
    queryDispatch: (state, action) => {
      return {
        ...state,
        query: action.payload
      }
    },
  }
})

export const {queryDispatch} = querySlice.actions
export default querySlice.reducer