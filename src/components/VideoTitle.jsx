import React from "react";

function VideoTitle({ title, overview }) {
  return (
    <div className="pt-36 px-12">
      <h1 className="text-6xl font-bold">{title}</h1>
      <h3 className="py-6 text-base w-1/4">{overview}</h3>
      <div className="">
        <button className="bg-slate-300 text-black p-4 px-12 text-xl bg-opacity-50  rounded-lg mx-2">Play</button>
        <button className="bg-slate-300 text-black p-4 px-12 text-xl bg-opacity-50  rounded-lg">More Info</button>
      </div>
    </div>
  );
}

export default VideoTitle;
