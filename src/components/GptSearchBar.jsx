import React, { useRef } from "react";
import lang from "../utils/languageConstants";
import { useDispatch, useSelector } from "react-redux";
import openai from "../utils/openai";
import { API_OPTIONS } from "../utils/constants";
import { addGPTMovies } from "../utils/gptSlice";
function GptSearchBar() {
  const langKey = useSelector((store) => store.config.lang);
  const gptSearchText = useRef(null);
  const dispatch = useDispatch()

  const searchMovieTMDB = async(movie)=>{
    const data = await fetch(`https://api.themoviedb.org/3/search/movie?query=${movie}&include_adult=false&language=en-US&page=1`,API_OPTIONS)
    const json = await data.json();
    return json.results
    //console.log(json.results)
  }

  const handleGptSearch = async () => {
    const gptQuery =
      "Act as movie recommendation system and suggest some movies for the query : " +
      gptSearchText.current.value +
      ". only give me names of 5 movies, comma seperated like the example result given ahead. Example result : Gadar, Animal, Sholay, 3 idiots, Ready";
    const gptResults = await openai.chat.completions.create({
      messages: [{ role: "user", content: gptQuery }],
      model: "gpt-3.5-turbo",
    });

    // if(!gptResults){TODO: "Write Error Handling"}
    //console.log(gptResults.choices?.[0]?.message?.content.split(","));
    const gptResultsArray = gptResults.choices?.[0]?.message?.content.split(",")

    const promiseArray = gptResultsArray.map((movie) => searchMovieTMDB(movie))
    const tmdbResults = await Promise.all(promiseArray)
    dispatch(addGPTMovies({movieNames: gptResultsArray , movieResults: tmdbResults}))
  };

  return (
    <>
      <div className="pt-[40%] md:pt-[10%] flex justify-center">
        <form
          className="w-full md:w-1/2 grid grid-cols-12  bg-black"
          onSubmit={(e) => e.preventDefault()}
        >
          <input
            ref={gptSearchText}
            type="text"
            placeholder={lang[langKey].gpt_placeholder}
            className=" p-2 m-4 col-span-9"
          />
          <button
            className="py-2 px-4 m-4 bg-red-600 col-span-3  text-white rounded-lg"
            onClick={handleGptSearch}
          >
            {lang[langKey].search}
          </button>
        </form>
      </div>
    </>
  );
}

export default GptSearchBar;
