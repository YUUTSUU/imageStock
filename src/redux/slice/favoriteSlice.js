import {createSlice} from '@reduxjs/toolkit'

const favoriteSlice = createSlice({
  name: 'favorite',
  initialState: {
    favorite: []
  },
  reducers: {
    favorite: (state, action) => {
      return {
        ...state,
        favorite: [
          ...state.favorite,
          action.payload
        ]
      }
    }
  }
})

export const {favorite} = favoriteSlice.actions
export default favoriteSlice.reducer