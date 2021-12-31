import {configureStore, getDefaultMiddleware} from '@reduxjs/toolkit'
import navigationSlice from '../slice/navigationSlice'
import favoritesSlice from '../slice/favoritesSlice'
import historySlice from '../slice/historySlice'
import modeSlice from '../slice/modeSlice'

export default configureStore({
  reducer: {
    navigation: navigationSlice,
    favorites: favoritesSlice,
    history: historySlice,
    mode: modeSlice
  },
  middleware: getDefaultMiddleware({
    serializableCheck: false
  })
})