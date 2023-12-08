import MovieList from "./MovieList"
import {useSelector} from 'react-redux'

const SecondayContainer = () =>{
    const movies = useSelector(store => store.movies)
    return(
        <div className="bg-black ">
            <div className="mt-0 md:-mt-52  relative z-20 pl-4 md:pl-12">
            <MovieList  title={"Now Playing"} movies={movies?.nowPlayingMovies}/>
            <MovieList  title={"Top Rated"} movies={movies?.topRatedMovies}/>
            <MovieList  title={"Upcoming Movies"} movies={movies?.upcomingMovies}/>
            <MovieList  title={"Popular"} movies={movies?.popularMovies}/>
            </div>
            
           
        </div>
    )
}

export default SecondayContainer