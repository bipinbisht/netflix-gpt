import React from 'react'
import { CARD_IMG_URL } from '../utils/constant'
const SearchMovieCard = ({ posterPath }) => {
  if (!posterPath) return
  return (
    <div className="w-48 pr-4 mt-4 hover:scale-110 ">
      <img
        className="rounded-2xl"
        alt="Movie Card"
        src={CARD_IMG_URL + posterPath}
      ></img>
    </div>
  )
}

export default SearchMovieCard
