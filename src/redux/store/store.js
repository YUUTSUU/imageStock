import {configureStore, getDefaultMiddleware} from '@reduxjs/toolkit'
import menuReducer from '../slice/menuSlice'

export default configureStore({
  reducer: {
    menu: menuReducer,
  },
  middleware: getDefaultMiddleware({
    serializableCheck: false
  })
})