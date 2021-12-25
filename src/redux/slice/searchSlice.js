import {createSlice} from '@reduxjs/toolkit'

const searchSlice = createSlice({
  name: 'search',
  initialState: {
    search: 'all',
  },
  reducers: {
    searchHandler: (state, action) => {
      return {
        ...state,
        search: action.payload
      }
    },
  }
})

export const {searchHandler} = searchSlice.actions
export default searchSlice.reducer