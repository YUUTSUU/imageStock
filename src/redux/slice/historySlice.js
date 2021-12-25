import {createSlice} from '@reduxjs/toolkit'

const historySlice = createSlice({
  name: 'history',
  initialState: {
    history: [],
  },
  reducers: {
    searchRequest: (state, action) => {
      return {
        ...state,
        history: [
          ...state.history,
          action.payload
        ]
      }
    },
  }
})

export const {searchRequest} = historySlice.actions
export default historySlice.reducer