import {createSlice} from '@reduxjs/toolkit'

const modeSlice = createSlice({
  name: 'mode',
  initialState: {
    mode: false,
  },
  reducers: {
    modeHandler: (state, action) => {
      const element = action.payload.target.closest('.mode__block')
      const attribute = element.getAttribute('data-item')
      switch (attribute) {
        case "rabbin":
          return {
            ...state,
            mode: true
          }
        case "tile":
          return {
            ...state,
            mode: false
          }
        default:
          return {
            ...state
          }
      }
    },
    windowHandler: (state) => {
      if (window.innerWidth < 650) {
        return {
          ...state,
          mode: true
        }
      } else {
        return {
          ...state,
          mode: false
        }
      }
    }
  }
})

export const {modeHandler, windowHandler} = modeSlice.actions
export default modeSlice.reducer