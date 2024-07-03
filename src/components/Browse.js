import useNowPlayingMovies from '../customHooks/useNowPlayingMovies'
import Header from './Header'
import MainContainer from './MainContainer'
import SecondaryContainer from './SecondaryContainer'
import usePopularMovies from '../customHooks/usePopularMovies'
const Browse = () => {
  useNowPlayingMovies()
  usePopularMovies()
  return (
    <div>
      <Header />

      <MainContainer />
      <SecondaryContainer />

      {/* 
        MainContainer
            1-videobackground
            2-title
         SecondaryContainer
            1-MovieList *n
                -cards*n   
      */}
    </div>
  )
}

export default Browse
