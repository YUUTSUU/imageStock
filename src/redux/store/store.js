import {configureStore, getDefaultMiddleware} from '@reduxjs/toolkit'
import navigationSlice from '../slice/navigationSlice'
import favoritesSlice from '../slice/favoritesSlice'
import historySlice from '../slice/historySlice'

export default configureStore({
  reducer: {
    navigation: navigationSlice,
    favorites: favoritesSlice,
    history: historySlice
  },
  middleware: getDefaultMiddleware({
    serializableCheck: false
  })
})