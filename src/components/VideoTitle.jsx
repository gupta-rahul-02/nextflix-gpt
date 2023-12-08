import React from "react";

function VideoTitle({ title, overview }) {
  return (
    <div className="w-screen aspect-video pt-[20%] px-6  md:px-24 absolute text-white bg-gradient-to-r from-black">
      <h1 className="text-2xl md:text-6xl font-bold">{title}</h1>
      <h3 className="hidden md:inline-block py-6 text-base w-1/4">{overview}</h3>
      <div className="my-4 md:m-0">
        <button className="bg-white text-black py-1  md:py-4 px-6 text-xl hover:bg-opacity-80  rounded-lg mx-2">Play</button>
        <button className="hidden md:inline-block bg-slate-300 text-black p-4 px-12 text-xl bg-opacity-50  rounded-lg">More Info</button>
      </div>
    </div>
  );
}

export default VideoTitle;
