import { createSlice } from '@reduxjs/toolkit'

export const site = createSlice({
  name: 'theme',
  initialState: {
    dark: false,
    language:"tr"
  },
  reducers: {
    setDarkMode: state => {
        state.dark = !state.dark
    },
    setLanguage: (state, action) => {
        state.language = action.payload
    }
  }
})

export const { setDarkMode, setLanguage } = site.actions

export default site.reducer