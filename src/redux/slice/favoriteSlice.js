import {createSlice} from '@reduxjs/toolkit'

const favoriteSlice = createSlice({
  name: 'favorite',
  initialState: {
    favorite: [],
    favorites: []
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
    },
    favoriteRequest: (state, action) => {
      return {
        ...state,
        favorites: action.payload
      }
    }
  }
})

export const {favorite, favoriteRequest} = favoriteSlice.actions
export default favoriteSlice.reducer