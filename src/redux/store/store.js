import {configureStore, getDefaultMiddleware} from '@reduxjs/toolkit'
import navigationSlice from '../slice/navigationSlice'
import historySlice from '../slice/historySlice'
import searchSlice from '../slice/searchSlice'
import requestSlice from '../slice/requestSlice'
import modeSlice from '../slice/modeSlice'
import favoriteSlice from '../slice/favoriteSlice'
import switchSlice from '../slice/switchSlice'

export default configureStore({
  reducer: {
    navigation: navigationSlice,
    search: searchSlice,
    history: historySlice,
    request: requestSlice,
    mode: modeSlice,
    favorite: favoriteSlice,
    switchContent: switchSlice
  },
  middleware: getDefaultMiddleware({
    serializableCheck: false
  })
})