import funnyCat from '../assets/images/funny-cat.png'

const Nav = ()=> {
  return (
    <header>
      <nav className="flex flex-1 flex-between bg-sky-200 p-2 ">
        <div className=' flex gap-3 relative items-center bg-white px-4 py-1 rounded-full shadow-md max-sm:gap-1'>
          <img src={funnyCat}  alt='funny cat' width={44} height={44} />
          <h3 className='text-center text-slate-600 text-2xl font-bold uppercase'>Top Text Bottom Text</h3>
        </div>
        
      </nav>
    </header>
  );
};
export default Nav;
