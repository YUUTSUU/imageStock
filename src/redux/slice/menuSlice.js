import {createSlice} from '@reduxjs/toolkit'

const menuSlice = createSlice({
  name: 'imageStock',
  initialState: {
    search: false,
    history: false,
    mode: false,
    searchData: [
      'Wallpapers',
      'Textures & Patterns',
      'Nature',
      'Current Events',
      'Architecture',
      'Business & Work',
      'Film',
      'Animals',
      'Travel',
      'Fashion',
      'Food & Drink',
      'Spirituality',
      'Experimental',
      'People',
      'Health Arts',
      'Culture'
    ],
    content: [],
    favorites: []
  },
  reducers: {
    componentShow: (state, action) => {
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
    modeShow: (state, action) => {
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
    widthMode: (state) => {
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
    searchValueAdd: (state, action) => {
      return {
        ...state,
        searchData: [
          ...state.searchData,
          action.payload
        ]
      }
    },
    contentImageAdd: (state, action) => {
      return {
        ...state,
        content: [
          ...state.content,
          ...action.payload
        ]
      }
    },
    favoritesAdd: (state, action) => {
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
  componentShow,
  modeShow,
  searchInputValue,
  searchValueAdd,
  widthMode,
  contentImageAdd,
  favoritesAdd
} = menuSlice.actions

export default menuSlice.reducer