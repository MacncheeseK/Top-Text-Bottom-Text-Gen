import memesData from "../memesData";
import { useState } from "react";

const Gen = () => {
  const [memeImages, setMemeImages]= useState('')
  const getMemeImage =()=>{
    const memeArray = memesData.data.memes;
    const randomMeme = memeArray[Math.floor(Math.random() * memeArray.length)];
    setMemeImages(randomMeme.url);
  }

  return (
    <div className=" grid grid-cols-2 grid-flow-row p-9 gap-12   ">
      <input
        type="text"
        placeholder="Top Text"
        className="border-2 border-gray-700 rounded-xl p-1 pr-12 text-2xl text-center drop-shadow-lg
        "
      />
      <input
        type="text"
        placeholder="Bottom Text"
        className="border-2 border-gray-700 rounded-xl p-1 pr-12 text-2xl text-center drop-shadow-lg
        "
      />

      <button className="col-span-2 bg-gradient-to-r from-sky-200 from-30% to-blue-400 rounded-xl py-2 font-sans text-slate-600 text-2xl cursor drop-shadow-xl " onClick={getMemeImage}>
        Get a new image 🖼️
      </button>
      <img src={memeImages} className="max-w-[100%]"/>
    </div>
  );
};
export default Gen;
