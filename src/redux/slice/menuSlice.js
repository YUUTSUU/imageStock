import {createSlice} from '@reduxjs/toolkit'

const menuSlice = createSlice({
  name: 'imageStock',
  initialState: {
    search: false,
    history: false,
    mode: false,
    list: [
      // 'Wallpapers',
      // 'Textures & Patterns',
      // 'Nature',
      // 'Current Events',
      // 'Architecture',
      // 'Business & Work',
      // 'Film',
      // 'Animals',
      // 'Travel',
      // 'Fashion',
      // 'Food & Drink',
      // 'Spirituality',
      // 'Experimental',
      // 'People',
      // 'Health Arts',
      // 'Culture'
    ],
    value: 'all',
    unsplash: [],
    favorites: []
  },
  reducers: {
    SearchHistorycomponent: (state, action) => {
      switch (action.payload.target.closest('.menu__block').getAttribute('data-item')) {
        case "search":
          return {
            ...state,
            search: !state.search,
            history: false
          }
        case "history":
          return {
            ...state,
            search: false,
            history: !state.history
          }
        default:
          return {
            ...state
          }
      }
    },
    modeComponent: (state, action) => {
      switch (action.payload.target.closest('.mode__block').getAttribute('data-item')) {
        case "rabbin":
          return {
            ...state,
            mode: true
          }
        case "tile":
          return {
            ...state,
            mode: false
          }
        default:
          return {
            ...state
          }
      }
    },
    widthView: (state) => {
      if (window.innerWidth < 650) {
        return {
          ...state,
          mode: true
        }
      } else {
        return {
          ...state,
          mode: false
        }
      }
    },
    searchRequest: (state, action) => {
      return {
        ...state,
        list: [
          ...state.list,
          action.payload
        ]
      }
    },
    searchInput: (state, action) => {
      return {
        ...state,
        value: action.payload
      }
    },
    unsplashRequest: (state, action) => {
      return {
        ...state,
        unsplash: [
          ...state.unsplash,
          ...action.payload
        ]
      }
    },
    unsplashClear: (state) => {
      return {
        ...state,
        unsplash: []
      }
    },
    favoritesRequest: (state, action) => {
      return {
        ...state,
        favorites: [
          ...state.favorites,
          action.payload
        ]
      }
    }
  }
})

export const {
  SearchHistorycomponent,
  modeComponent,
  widthView,
  searchRequest,
  searchInput,
  unsplashRequest,
  unsplashClear,
  favoritesRequest
} = menuSlice.actions

export default menuSlice.reducer