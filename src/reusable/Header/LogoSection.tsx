import * as React from 'react';

export interface IAppProps {
}

function LogoSection () {
  return (
    <>
        <div className='font-bold text-2xl cursor-pointer flex items-center'>
            <span>The Child</span>
        </div>
        <div className='absolute right-8 top-6 cursor-pointer md:hidden w-7 h-7'>
        </div>
    </>
  );
}

export default LogoSection