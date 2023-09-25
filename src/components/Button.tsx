import * as React from 'react';
import { Link } from 'react-router-dom';

export interface IButtonProps {
    text: string;
    link: string;
}

export function Button (props: IButtonProps) {
  return (
    <>
      <Link
      to={props.link}
      className='text-base font-semibold text-white bg-black py-2 px-6 rounded-full hover-shadow-lg
      hover:opacity-80 transition duration-300 ease-in-out'>
        {props.text}
      </Link>
    </>
  );
}
