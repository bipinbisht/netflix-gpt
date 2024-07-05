import React from 'react'
import { CARD_IMG_URL } from '../utils/constant'
const MovieCard = ({ posterPath }) => {
  return (
    <div className="w-48 pr-4 hover:scale-125 ">
      <img
        className="rounded-xl"
        alt="Movie Card"
        src={CARD_IMG_URL + posterPath}
      ></img>
    </div>
  )
}

export default MovieCard
