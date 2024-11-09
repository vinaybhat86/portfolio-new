import { useDarkMode } from "../context/DarkModeContext";

function SingleProject({ image, Link1, Link2, name }) {
  const { darkmode } = useDarkMode();

  return (
    <div className='md:w-1/3 h-3/6 flex flex-col items-center'>
      <img 
        src={image} 
        alt='project1' 
        style={{ clipPath: 'inset(0px 0px 0px 0px)' }}
      />
      <h1 className="font-light text-3xl pt-8 pb-3">{name}</h1>
      <div className='flex gap-3'>
        <button 
          onClick={() => window.open(Link1, '_blank')}
          className={`px-4 py-2 rounded-md ${darkmode ? 'bg-[#EF47BC] hover:bg-[#ef47bdd8] text-[#1D232A]' : 'bg-[#f100b5c6] hover:bg-[#F100B7]'} text-white`}
        >
          Live
        </button>
        <button 
          onClick={() => window.open(Link2, '_blank')}
          className={`px-4 py-2 rounded-md ${darkmode ? 'bg-[#646EE4] hover:bg-[#5d67d5] text-[#1D232A]' : 'bg-[#3e00e7eb] hover:bg-[#2a00e7]'} text-white`}
        >
          Source
        </button>
      </div>
    </div>
  );
}

export default SingleProject;
