import memesData from '../memesData';
import { useState } from 'react';

const Gen = () => {
  const [meme, setMeme] = useState({ topText: '', bottomText: '', url: '' });
  const [allMemeImages, setAllMemeImages] = useState(memesData);
  const getMemeImage = () => {
    const memeArray = allMemeImages.data.memes;
    const randomMeme = memeArray[Math.floor(Math.random() * memeArray.length)];
    setMeme((prevMeme) => ({ ...prevMeme, url: randomMeme.url }));
  };

  return (
    <div className='p-9'>
      <div className=" grid grid-cols-2 grid-flow-row  gap-12   ">
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

        <button
          className="col-span-2 bg-gradient-to-r from-sky-200 from-30% to-blue-400 rounded-xl py-2 font-sans text-slate-600 text-2xl cursor drop-shadow-xl "
          onClick={getMemeImage}
        >
          Get a new image 🖼️
        </button>
      </div>
        <img src={meme.url} className=" rounded max-w-full mt-6 "/>
    </div>
  );
};
export default Gen;
