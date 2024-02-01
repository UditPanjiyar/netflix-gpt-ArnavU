import { useSelector } from "react-redux"
import MovieList from "./MovieList";

const SecondaryContainer = () => {
  const movies = useSelector(store => store.movies);

  return (
    <div className="bg-black">
      <div className="md:translate-y-[-150px]">
        <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies}/> 
        <MovieList title={"Top Rated"} movies={movies.topRatedMovies}/>
        <MovieList title={"Popular Movies"} movies={movies.popularMovies}/>
        <MovieList title={"Upcoming Movies"} movies={movies.upcomingMovies}/>
        <MovieList title={"Horror Movies"} movies={movies.nowPlayingMovies}/>
      </div>
    </div>
  )
}

export default SecondaryContainer