import React from 'react'
import GptSearchBar from './GptSearchBar'
import { BG_IMG } from '../utils/constants'
import GptMovieSuggestions from './GptMovieSuggestions'

function GptSearch() {
  return (
    <div>
        <div className="fixed -z-10">
        <img src={BG_IMG}
          alt="background_image"
        />
      </div>
        <GptSearchBar/>
        <GptMovieSuggestions/>
    </div>
  )
}

export default GptSearch