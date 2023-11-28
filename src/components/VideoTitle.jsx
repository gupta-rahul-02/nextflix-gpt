import React from "react";

function VideoTitle({ title, overview }) {
  return (
    <div className="w-screen aspect-video pt-[20%]  px-24 absolute text-white bg-gradient-to-r from-black">
      <h1 className="text-6xl font-bold">{title}</h1>
      <h3 className="py-6 text-base w-1/4">{overview}</h3>
      <div className="">
        <button className="bg-white text-black p-4 px-12 text-xl hover:bg-opacity-80  rounded-lg mx-2">Play</button>
        <button className="bg-slate-300 text-black p-4 px-12 text-xl bg-opacity-50  rounded-lg">More Info</button>
      </div>
    </div>
  );
}

export default VideoTitle;
