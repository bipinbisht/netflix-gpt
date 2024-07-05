import React from 'react'
import VideoContainer from './VideoContainer'
import TitleContainer from './TitleContainer'
import { useSelector } from 'react-redux'

const MainContainer = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies)

  // console.log(movies)
  if (!movies) return
  const movie = movies[2]
  const { original_title, id, overview } = movie
  return (
    <div className="pt-[30%] bg-black  md:pt-0">
      <TitleContainer title={original_title} summary={overview} />
      <VideoContainer movieId={id} />
    </div>
  )
}

export default MainContainer
