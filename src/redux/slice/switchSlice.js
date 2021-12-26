import {createSlice} from '@reduxjs/toolkit'

const switchSlice = createSlice({
  name: 'switchContent',
  initialState: {
    switchContent: false
  },
  reducers: {
    favoriteTrue: (state) => {
      return {
        ...state,
        switchContent: true
      }
    },
    favoriteFalse: (state) => {
      return {
        ...state,
        switchContent: false
      }
    }
  }
})

export const {favoriteTrue, favoriteFalse} = switchSlice.actions
export default switchSlice.reducer