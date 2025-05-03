import { useState } from 'react';

const Hamburger = ({ isOpen, toggle }) => {
  console.log(isOpen)
  return (
    <button 
      className="flex flex-col justify-center h-8 w-8 cursor-pointer group transform hover:scale-105 transition duration-300"
      onClick={toggle}
    >
      <span className={`bg-hexgrey hover:bg-hexblue h-0.5 w-full rounded-sm transform transition duration-300 ease-in-out ${isOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
      <span className={`bg-hexgrey hover:bg-hexblue h-0.5 w-full rounded-sm mt-1 transform transition duration-300 ease-in-out ${isOpen ? 'opacity-0' : ''}`}></span>
      <span className={`bg-hexgrey hover:bg-hexblue h-0.5 w-full rounded-sm mt-1 transform transition duration-300 ease-in-out ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
      <span className={`bg-hexgrey hover:bg-hexblue h-0.5 w-full rounded-sm mt-1 transform transition duration-300 ease-in-out ${isOpen ? 'opacity-0' : ''}`}></span>
    </button>
  );
};

export default Hamburger;