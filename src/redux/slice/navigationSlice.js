import {createSlice} from '@reduxjs/toolkit'

const navigationSlice = createSlice({
  name: 'navigation',
  initialState: {
    searchToggle: false,
    historyToggle: false,
  },
  reducers: {
    navigationSearchDispatch: (state) => {
      return {
        ...state,
        searchToggle: !state.searchToggle,
        historyToggle: false
      }
    },
    navigationHistoryDispatch: (state) => {
      return {
        ...state,
        searchToggle: false,
        historyToggle: !state.historyToggle
      }
    },
    navigationFavoritesDispatch: (state) => {
      return {
        ...state,
        searchToggle: false,
        historyToggle: false
      }
    }
  }
})

export const {navigationSearchDispatch, navigationHistoryDispatch, navigationFavoritesDispatch} = navigationSlice.actions
export default navigationSlice.reducer