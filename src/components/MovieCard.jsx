import React from 'react'
import { IMG_CDN } from '../utils/constants'

function MovieCard({posterPath}) {
  if(!posterPath) return null
  return (
    <div className='w-36 md:w-48 pr-4'>
        <img alt='movieposter' src={IMG_CDN + posterPath}/>
    </div>
  )
}

export default MovieCard