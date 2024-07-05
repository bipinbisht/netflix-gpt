import { createSlice } from '@reduxjs/toolkit'

const searchSlice = createSlice({
  name: 'gpt',
  initialState: {
    toggleSearch: false,
    searchMovies: null,
  },
  reducers: {
    setToggleSearch: (state) => {
      state.toggleSearch = !state.toggleSearch
    },
    addSearchMovie: (state, action) => {
      state.searchMovies = action.payload
    },
    removeSearchMovies: (state, action) => {
      state.searchMovies = null
    },
  },
})

export const { setToggleSearch, addSearchMovie, removeSearchMovies } =
  searchSlice.actions
export default searchSlice.reducer
