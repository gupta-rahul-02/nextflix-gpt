import React from 'react'
import { IMG_CDN } from '../utils/constants'

function MovieCard({posterPath}) {
  return (
    <div className='w-48 pr-4'>
        <img alt='movieposter' src={IMG_CDN + posterPath}/>
    </div>
  )
}

export default MovieCard