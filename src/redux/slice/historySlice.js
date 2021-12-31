import {createSlice} from '@reduxjs/toolkit'

const historySlice = createSlice({
  name: 'history',
  initialState: {
    recommendations: [
      'Wallpapers',
      'Textures & Patterns',
      'Nature',
      'Current',
      'Events',
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
      'Health', 
      'Arts & Culture'
    ],
    history: [],
  },
  reducers: {
    historyDipatch: (state, action) => {
      return {
        ...state,
        history: [
          ...state.history,
          action.payload
        ]
      }
    },
  }
})

export const {historyDipatch} = historySlice.actions
export default historySlice.reducer