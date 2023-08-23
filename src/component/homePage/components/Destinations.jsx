import React from 'react';
import BoraBora from '../assets/d1.jpg';
import BoraBora2 from '../assets/d2.jpg';
import Maldives from '../assets/d6.jpg';
import Maldives2 from '../assets/d5.jpg';
import KeyWest from '../assets/d4.jpg';

const Destinations = () => {
  return (
    <div className='max-w-[1240px] mx-auto py-28 px-4 text-center'>
      <h1 className='text-5xl text-center mb-4 z-20 block mx-auto'>Paws & Adventure: Unleashing Getaways</h1>
      <p className='py-4'>Tail-Wagging Fun Awaits</p>
      <div className='w-full h-full grid grid-rows-none md:grid-cols-5 py-4 gap-2 md:gap-4'>
        <img className='w-full h-full object-cover col-span-2 md:col-span-3 row-span-2 hover:opacity-75 transition-opacity duration-300' src={BoraBora} alt="/" />
        <img className='w-full h-full object-cover hover:opacity-75 transition-opacity duration-300' src={BoraBora2} alt="/" />
        <img className='w-full h-full object-cover hover:opacity-75 transition-opacity duration-300' src={Maldives} alt="/" />
        <img className='w-full h-full object-cover hover:opacity-75 transition-opacity duration-300' src={Maldives2} alt="/" />
        <img className='w-full h-full object-cover hover:opacity-75 transition-opacity duration-300' src={KeyWest} alt="/" />
      </div>
    </div>
  )
}

export default Destinations;

