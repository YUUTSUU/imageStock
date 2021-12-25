import {createSlice} from '@reduxjs/toolkit'

const requestSlice = createSlice({
  name: 'request',
  initialState: {
    content: []
  },
  reducers: {
    request: (state, action) => {
      return {
        ...state,
        content: [
          ...state.content,
          ...action.payload
        ]
      }
    },
    clear: (state) => {
      return {
        ...state,
        content: []
      }
    }
  }
})

export const {request, clear} = requestSlice.actions
export default requestSlice.reducer