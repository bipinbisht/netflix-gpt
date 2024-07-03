import { useDispatch } from 'react-redux'
import { API_OPTION } from '../utils/constant'
import { addNowPlayingMovies } from '../utils/movieSlice'
import { useEffect } from 'react'

const useNowPlayingMovies = () => {
  const dispatch = useDispatch()
  const url = 'https://api.themoviedb.org/3/movie/now_playing?page=1'
  const fetchMovieNow = async () => {
    const data = await fetch(url, API_OPTION)
    const json = await data.json()
    dispatch(addNowPlayingMovies(json.results))
  }
  useEffect(() => {
    fetchMovieNow()
  }, [])
}

export default useNowPlayingMovies
