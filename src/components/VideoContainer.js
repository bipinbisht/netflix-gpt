import { useSelector } from 'react-redux'
import useMovieTrailer from '../customHooks/useMovieTrailer'
const VideoContainer = ({ movieId }) => {
  useMovieTrailer(movieId)
  const trailerVideo = useSelector((store) => store.movies.trailerVideo)

  console.log(trailerVideo?.key)
  return (
    <div className="object-contain">
      <iframe
        className="w-screen aspect-video"
        src={
          'https://www.youtube.com/embed/' +
          trailerVideo?.key +
          '?si=?&autoplay=1&mute=1'
        }
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </div>
  )
}

export default VideoContainer
