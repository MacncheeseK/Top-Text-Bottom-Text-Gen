import memesData from '../memesData';
import { useState, useEffect} from 'react';

const Gen = (props:{darkMode:boolean}) => {
  interface eventTarget{
    name: string;
    value: string;
    checked: boolean;
    type: string;
  };
  const [meme, setMeme] = useState({ topText: '', bottomText: '', url: '' });
  const [allMemeImages, setAllMemeImages] = useState([]);

useEffect(()=>{
  fetch('https://api.imgflip.com/get_memes')
    .then((response) => response.json())
    .then((data)=> setAllMemeImages(data.data.memes))
  
},[]);


  const getMemeImage = () => {
    const randomMeme:{ url:string } = allMemeImages[Math.floor(Math.random() * allMemeImages.length)];
    console.log(randomMeme);
    setMeme((prevMeme) => ({ ...prevMeme, url: randomMeme.url }));
  };

  const getText = (event: { target: eventTarget }) => {
    const { name, value, checked, type } = event.target;
    console.log(typeof value);
    setMeme((prevMeme) => ({
      ...prevMeme,
      [name]: type === 'checked' ? checked : value,
    }));
  };



  return (
    <div className={props.darkMode ? 'p-9 bg-gray-900 min-h-screen' : 'p-9'}>
      <div className=" grid grid-cols-2 grid-flow-row  gap-12   ">
        <input
          type="text"
          placeholder="Top Text"
          className="border-2 border-gray-700 rounded-xl p-1 pr-12 text-2xl text-center drop-shadow-lg
          "
          name="topText"
          value={meme.topText}
          onChange={getText}
        />
        <input
          type="text"
          placeholder="Bottom Text"
          className="border-2 border-gray-700 rounded-xl p-1 pr-12 text-2xl text-center drop-shadow-lg
        "
          name="bottomText"
          value={meme.bottomText}
          onChange={getText}
        />

        <button
          className="col-span-2 bg-gradient-to-r from-sky-200 from-30% to-blue-400 rounded-xl py-2 font-sans text-slate-600 text-2xl cursor drop-shadow-xl "
          onClick={getMemeImage}
        >
          Get a new image 🖼️
        </button>
      </div>
      <div className="absolute">
        <img src={meme.url} className=" rounded max-w-full mt-6 " />
        <h2 className="absolute w-[80%] text-center left-[50%]  py-1 font-impact text-[2em] uppercase text-white top-8 -translate-x-[50%]  ">
          {meme.topText}
        </h2>
        <h2 className="absolute w-[80%] text-center left-[50%]  py-1 font-impact text-[2em] uppercase text-white bottom-4 -translate-x-[50%]">
          {meme.bottomText}
        </h2>
      </div>
    </div>
  );
};
export default Gen;
