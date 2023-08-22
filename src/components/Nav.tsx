import funnyCat from '../assets/images/funny-cat.png'

const Nav = ()=> {
  return (
    <header>
      <nav className="flex flex-1 flex-between bg-gradient-to-r from-sky-300  from-30% to-blue-400 p-2 ">
        <div className=' flex gap-3 relative items-center bg-white px-4 py-1 rounded-full drop-shadow-lg max-sm:gap-1 '>
          <img src={funnyCat}  alt='funny cat' width={44} height={44} />
          <h3 className='text-center text-slate-600 text-2xl font-bold uppercase font-san'>Top Text Bottom Text</h3>
        </div>
        
      </nav>
    </header>
  );
};
export default Nav;
