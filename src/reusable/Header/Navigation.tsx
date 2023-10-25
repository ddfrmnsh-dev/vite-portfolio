import * as React from 'react';
import { Link } from 'react-router-dom';

export interface INavigationProps {
}

function LinkNavigation () {

  return (
    <>
        <li className='md:ml-8 md:my-0 my-7 font-semibold'>
            <Link to="/" className='text-gray-800 hover:text-blue-400 duration-500'>Home</Link>
        </li>
        <li className='md:ml-8 md:my-0 my-7 font-semibold'>
            <Link to="/project" className='text-gray-800 hover:text-blue-400 duration-500'>Project</Link>
        </li>
        <li className='md:ml-8 md:my-0 my-7 font-semibold'>
            <Link to="/blog" className='text-gray-800 hover:text-blue-400 duration-500'>Blog</Link>
        </li> 
    </>
  );
}

export default LinkNavigation
