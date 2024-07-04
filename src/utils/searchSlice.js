import { createSlice } from '@reduxjs/toolkit'

const searchSlice = createSlice({
  name: 'gpt',
  initialState: {
    toggleSearch: false,
  },
  reducers: {
    setToggleSearch: (state) => {
      state.toggleSearch = !state.toggleSearch
    },
  },
})

export const { setToggleSearch } = searchSlice.actions
export default searchSlice.reducer
