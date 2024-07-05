import React from 'react'
import SearchMovieCard from './SearchMovieCard'

const SearchMovieList = ({ title, movies }) => {
  //   console.log(movies)

  return (
    movies && (
      <div className="px-6 mt-8 p-6 ">
        <h1 className=" text-3xl py-4 text-white text-center">{title}</h1>
        <div className="flex ">
          <div className="flex flex-wrap p-10 mx-5 ml-24">
            {movies?.map((movie) => (
              <SearchMovieCard key={movie.id} posterPath={movie.poster_path} />
            ))}
          </div>
        </div>
      </div>
    )
  )
}

export default SearchMovieList
