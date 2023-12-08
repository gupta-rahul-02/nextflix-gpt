import { useSelector } from "react-redux";
import MovieList from "./MovieList";
function GptMovieSuggestions() {
  const { GPTMovies, movieNames } = useSelector((store) => store.gpt);
  if (!movieNames) return null;
  return (
    <div className="p-4 m-4 bg-black bg-opacity-90 text-white">
      {movieNames.map((movieName, index) => (
        <MovieList
          key={movieName}
          title={movieName}
          movies={GPTMovies[index]}
        />
      ))}
    </div>
  );
}

export default GptMovieSuggestions;
