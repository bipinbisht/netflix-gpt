import { useDispatch, useSelector } from 'react-redux'
import { API_OPTION } from '../utils/constant'
import { addPopularMovies } from '../utils/movieSlice'
import { useEffect } from 'react'

const usePopularMovies = () => {
  const popularMovies = useSelector((store) => store.movies?.popularMovies)
  const dispatch = useDispatch()
  const url = 'https://api.themoviedb.org/3/movie/popular?page=1'
  const fetchMoviePopular = async () => {
    const data = await fetch(url, API_OPTION)
    const json = await data.json()
    dispatch(addPopularMovies(json.results))
  }
  useEffect(() => {
    !popularMovies && fetchMoviePopular()
  }, [])
}

export default usePopularMovies
