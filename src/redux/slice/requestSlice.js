import {createSlice} from '@reduxjs/toolkit'

const requestSlice = createSlice({
  name: 'request',
  initialState: {
    content: [],
    disabledFirst: true
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
    },
    disabled: () => {
      return {
        disabledFirst: false
      }
    }
  }
})

export const {request, clear, disabled} = requestSlice.actions
export default requestSlice.reducer