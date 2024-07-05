import React from 'react'
import { CARD_IMG_URL } from '../utils/constant'
const MovieCard = ({ posterPath }) => {
  return (
    <div className="w-24 md:w-48  md:pr-4 md:mt-4 hover:scale-125 ">
      <img
        className="rounded-xl"
        alt="Movie Card"
        src={CARD_IMG_URL + posterPath}
      ></img>
    </div>
  )
}

export default MovieCard
