import React from 'react'
import {useSelector} from 'react-redux'
import VideoTitle from './VideoTitle'
import VideoBackground from './VideoBackground'


function MainContainer() {
  // const randomNumber = () =>{
  //   return Math.floor(Math.random()*20)
  // }
    const movies = useSelector((store) => store.movies?.nowPlayingMovies)
    if(!movies) return

    const mainMovie = movies[0]
    console.log(mainMovie)
  return (
   
    <>
     <div className='pt-[30%] bg-black md:pt-0'>
     <VideoTitle title = {mainMovie.original_title} overview= {mainMovie.overview}/>
     <VideoBackground id={mainMovie.id}/>
     </div>
     
    </>
  )
}

export default MainContainer