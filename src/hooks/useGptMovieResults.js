import openai from "../utils/openai";
import {useDispatch} from 'react-redux'
import { addGPTMovies } from "../utils/gptSlice";
import { API_OPTIONS } from "../utils/constants";


const searchMovieTMDB = async(movie)=>{
    const data = await fetch(`https://api.themoviedb.org/3/search/movie?query=${movie}&include_adult=false&language=en-US&page=1`,API_OPTIONS)
    const json = await data.json();
    return json.results
    //console.log(json.results)
  }

const useGptMovieResults = async (inputText) => {
    const dispatch = useDispatch();
    const gptQuery =
    "Act as movie recommendation system and suggest some movies for the query : " +
    inputText +
    ". only give me names of 5 movies, comma seperated like the example result given ahead. Example result : Gadar, Animal, Sholay, 3 idiots, Ready";
  const gptResults = await openai.chat.completions.create({
    messages: [{ role: "user", content: gptQuery }],
    model: "gpt-3.5-turbo",
  });

  const gptResultsArray = gptResults.choices?.[0]?.message?.content.split(",");
  const promiseArray = gptResultsArray.map((movie) => searchMovieTMDB(movie));
  const tmdbResults = await Promise.all(promiseArray);
  dispatch(
    addGPTMovies({ movieNames: gptResultsArray, movieResults: tmdbResults })
  );
  console.log(tmdbResults);
};

export default useGptMovieResults;
