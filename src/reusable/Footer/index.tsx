import * as React from 'react';
import SectionLogo from './SectionLogo';
export interface IIndexProps {
}

function Index () {
  return (
    <div className='top-0 left-0 w-ful px-2 md:px-0 lg:px-96 z-10 shadow-md bg-gray-600'>
      <div className="px-4 py-6 md:flex md:items-center md:justify-between">
        <span className="text-sm text-gray-500 dark:text-gray-300 sm:text-center">© {Date().slice(10,15)} <a href="https://flowbite.com/">
            Dede Firmansah</a>. All Rights Reserved.
        </span>
        <SectionLogo />
      </div>
    </div>
  );
}

export default Index