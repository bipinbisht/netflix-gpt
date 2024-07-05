import React from 'react'
import SearchBar from './SearchBar'
import MovieSuggestion from './MovieSuggestion'
import { IMG_BG } from '../utils/constant'
const SearchGpt = () => {
  return (
    <div>
      <div className="fixed -z-10">
        <img src={IMG_BG} alt="BG_Search"></img>
      </div>
      <SearchBar />
      <MovieSuggestion />
    </div>
  )
}

export default SearchGpt
