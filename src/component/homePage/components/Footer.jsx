import React from 'react';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import PinterestIcon from '@mui/icons-material/Pinterest';

const Footer = () => {
  return (
    <div>
      <div className='w-full bg-gray-900 py-10'>
        <div className='max-w-[1240px] mx-auto flex flex-col px-4 text-white '>
          <div className='sm:flex text-center justify-between items-center text-white'>
            <h2 className='my-3 text-white'>StrayToStay.</h2>
            <div className='flex justify-between w-full sm:max-w-[280px] my-4 py-5'>
              <FacebookIcon color='secondary' />
              <TwitterIcon  color='secondary'/>
              <YouTubeIcon color='secondary' />
              <PinterestIcon color='secondary' />
              <InstagramIcon color='secondary' />
            </div>
          </div>
          <div className='flex justify-between'>
    <ul className='lg:flex text-white'>
      <li>About Us</li>
      <li>Partnerships</li>
      <li>Volunteer</li>
      <li>News & Events</li>
      <li>Support Us</li>
    </ul>
    <ul className='text-right lg:flex text-white'>
      <li>Home</li>
      <li>Adopt</li>
      <li>Donate</li>
      <li>Volunteer</li>
      <li>Contact</li>
    </ul>
  </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
