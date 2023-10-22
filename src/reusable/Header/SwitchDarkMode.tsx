import * as React from 'react';
import IconSun from '../../components/IconSun';
import IconDark from '../../components/IconMoon';
export interface IAppProps {
}

function DarkMode () {
    const [check, isCheck] = React.useState(false)
  return (
    <div onClick={()=>isCheck(!check)} className='hidden md:block'>
      { !check ?
        <IconSun/> :
        <IconDark/>
      }
    </div>
  );
}

export default DarkMode