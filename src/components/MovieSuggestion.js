import React from 'react'
import { useSelector } from 'react-redux'
import SearchMovieList from './SearchMovieList'

const MovieSuggestion = () => {
  const searchMovies = useSelector((store) => store.gpt?.searchMovies)
  if (searchMovies?.length === 0)
    return (
      <h1 className="text-white text-center font-bold text-2xl">
        No movies found!!!
      </h1>
    )

  return (
    <div>
      <SearchMovieList title={'Results'} movies={searchMovies} />
    </div>
  )
}

export default MovieSuggestion
