import { useEffect } from 'react'
import { API_OPTION } from '../utils/constant'
import { useDispatch, useSelector } from 'react-redux'
import { addTrailerVideo } from '../utils/movieSlice'
// 786892
const useMovieTrailer = (movieId) => {
  const dispatch = useDispatch()
  const url = 'https://api.themoviedb.org/3/movie/' + movieId + '/videos'
  // const url = 'https://api.themoviedb.org/3/movie/786892/videos'

  const fetchMovieVideo = async () => {
    const data = await fetch(url, API_OPTION)
    const json = await data.json()
    // console.log(json)
    const trailers = json.results.filter((video) => {
      return video.type === 'Trailer'
    })
    const trailer = trailers.length ? trailers[0] : json.results[0]
    console.log(trailer)

    dispatch(addTrailerVideo(trailer))
  }

  useEffect(() => {
    fetchMovieVideo()
  }, [])
}
export default useMovieTrailer
