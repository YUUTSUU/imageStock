import {createSlice} from '@reduxjs/toolkit'

const navigationSlice = createSlice({
  name: 'navigation',
  initialState: {
    searchComponent: false,
    historyComponent: false,
  },
  reducers: {
    navigation: (state, action) => {
      const element = action.payload.target.closest('.menu__block')
      const attribute = element.getAttribute('data-item')
      switch (attribute) {
        case "search":
          return {
            ...state,
            searchComponent: !state.searchComponent,
            historyComponent: false
          }
        case "history":
          return {
            ...state,
            searchComponent: false,
            historyComponent: !state.historyComponent
          }
        default:
          return {
            ...state
          }
      }
    }
  }
})

export const {navigation} = navigationSlice.actions
export default navigationSlice.reducer