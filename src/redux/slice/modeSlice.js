import {createSlice} from '@reduxjs/toolkit'

const modeSlice = createSlice({
  name: 'mode',
  initialState: {
    column: 3,
    mode: false,
  },
  reducers: {
    windowHandler: (state) => {
      if (window.innerWidth < 650) {
        return {
          ...state,
          column: 1,
          mode: true
        }
      } else if (window.innerWidth > 650 && window.innerWidth < 850) {
        return {
          ...state,
          column: 2,
          mode: false
        }
      } else if (window.innerWidth > 850) {
        return {
          ...state,
          column: 3,
          mode: false
        }
      }
    }
  }
})

export const {modeHandler, windowHandler} = modeSlice.actions
export default modeSlice.reducer