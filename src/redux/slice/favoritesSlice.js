import {createSlice} from '@reduxjs/toolkit'

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState: {
    images: [],
    id: []
  },
  reducers: {
    favoritesIdDispatch: (state, action) => {
      return {
        ...state,
        id: [
          ...state.id,
          action.payload
        ]
      }
    },
    favoritesImagesDispatch: (state, action) => {
      return {
        ...state,
        images: [
          ...action.payload.filter(item => state.id.includes(item.id))
        ]
      }
    },
    favoritesImagesDeleteDispatch: (state, action) => {
      return {
        ...state,
        images: state.images.filter(item => !action.payload.includes(item.id)),
        id: state.id.filter(item => !action.payload.includes(item)),
      }
    }
  }
})

export const {
  favoritesIdDispatch,
  favoritesImagesDispatch,
  favoritesImagesDeleteDispatch
} = favoritesSlice.actions
export default favoritesSlice.reducer