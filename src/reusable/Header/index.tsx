import * as React from 'react';
import LogoSection from './LogoSection';
import LinkNavigation from './Navigation';
import DarkMode from './SwitchDarkMode';

export interface IAppProps {
}

function Index () {
  
  const [open, setOpen] = React.useState(false)
  return (
    <div className='top-0 left-0 w-full mb-5 sticky px-2 md:px-0 lg:px-96 z-10 shadow-md'>
        <div className={`md:flex items-center justify-between ${open ? 'bg-white' : 'bg-transparent'} py-4 md:px-10 px-7 backdrop-blur-sm`}>
            <div onClick={()=>setOpen(!open)}>
              <LogoSection open={open}/>
            </div>
            <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-12 bg-white' : 'top-[-490px] bg-transparent'}`}>
                <LinkNavigation />
            </ul>
            <DarkMode/>
        </div>
    </div>
  );
}

export default Index