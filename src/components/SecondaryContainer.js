import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies)

  // console.log(movies + ' from container')
  return (
    movies?.nowPlayingMovies &&
    movies?.popularMovies && (
      <div className=" bg-black">
        <div className="-mt-64 pl-14 relative z-20">
          <MovieList title={'Now Playing'} movies={movies.nowPlayingMovies} />
          <MovieList title={'Popular'} movies={movies.popularMovies} />
          <MovieList title={'Trending'} movies={movies.nowPlayingMovies} />
          <MovieList title={'Upcoming'} movies={movies.popularMovies} />
          <MovieList title={'Horror'} movies={movies.nowPlayingMovies} />
          <MovieList title={'Sci-fi'} movies={movies.popularMovies} />
        </div>
      </div>
    )
  )
}

export default SecondaryContainer
