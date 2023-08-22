const Gen = () => {
  return (
    <form className=" grid grid-cols-2 grid-flow-row my-10 mx-12 gap-12   ">
      <input
        type="text"
        placeholder="Top Text"
        className="border-2 border-gray-700 rounded-xl p-1 pr-12 text-2xl text-center
        "
      />
      <input
        type="text"
        placeholder="Bottom Text"
        className="border-2 border-gray-700 rounded-xl p-1 pr-12 text-2xl text-center
        "
      />

      <button className="col-span-2 bg-gradient-to-r from-sky-200 from-30% to-blue-400 rounded-xl py-2 font-sans text-slate-600 text-2xl">
        Get a new image 🖼️
      </button>
    </form>
  );
};
export default Gen;
