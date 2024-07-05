import React from 'react'
import SearchBar from './SearchBar'
import MovieSuggestion from './MovieSuggestion'
import { IMG_BG } from '../utils/constant'
const SearchGpt = () => {
  return (
    <div>
      <div className="fixed -z-10">
        <img
          src={IMG_BG}
          alt="BG_Search"
          className=" h-screen object-cover md:h-fit "
        ></img>
      </div>
      <div className="">
        <SearchBar />
        <MovieSuggestion />
      </div>
    </div>
  )
}

export default SearchGpt
