import React from 'react'
import GptSearchBar from './GptSearchBar'
import { BG_IMG } from '../utils/constants'
import GptMovieSuggestions from './GptMovieSuggestions'

function GptSearch() {
  return (
    <>
     <div className="fixed -z-10">
        <img className='h-screen object-cover md:w-screen' src={BG_IMG}
          alt="background_image"
        />
      </div>
      <div className=''>
        
        <GptSearchBar/>
        <GptMovieSuggestions/>
    </div>
    </>
    
  )
}

export default GptSearch