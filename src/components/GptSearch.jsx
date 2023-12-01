import React from 'react'
import GptSearchBar from './GptSearchBar'
import { BG_IMG } from '../utils/constants'

function GptSearch() {
  return (
    <div>
        <div className="absolute -z-10">
        <img src={BG_IMG}
          alt="background_image"
        />
      </div>
        <GptSearchBar/>
    </div>
  )
}

export default GptSearch