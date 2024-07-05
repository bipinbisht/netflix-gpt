import React from 'react'
import SearchMovieCard from './SearchMovieCard'

const SearchMovieList = ({ title, movies }) => {
  //   console.log(movies)

  return (
    movies && (
      <div className="px-6 mt-8 p-6 ">
        <h1 className=" text-lg md:text-3xl py-4 text-white text-center">
          {title}
        </h1>
        <div className="flex md:bg-black md:opacity-80 bg-black opacity-80">
          <div className="flex md:flex-wrap md:p-10 md:mx-5 md:ml-24  flex-wrap mx-6 p-2">
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
