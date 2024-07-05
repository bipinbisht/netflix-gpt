import useNowPlayingMovies from '../customHooks/useNowPlayingMovies'
import Header from './Header'
import MainContainer from './MainContainer'
import SecondaryContainer from './SecondaryContainer'
import usePopularMovies from '../customHooks/usePopularMovies'
import SearchGpt from './SearchGpt'
import { useSelector } from 'react-redux'
const Browse = () => {
  const toggleSearch = useSelector((store) => store.gpt.toggleSearch)
  const user = useSelector((store) => store.user)
  // console.log(user?.displayName)
  // console.log(toggleSearch)
  useNowPlayingMovies()
  usePopularMovies()
  return (
    <div>
      <Header />
      {toggleSearch && user ? (
        <SearchGpt />
      ) : (
        <>
          <MainContainer />
          <SecondaryContainer />
        </>
      )}
    </div>
  )
}

export default Browse

/* 
        MainContainer
            1-videobackground
            2-title
         SecondaryContainer
            1-MovieList *n
                -cards*n   
      */
