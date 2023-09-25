import * as React from 'react';

export interface IHeaderProps {
    name: string,
    position: string,
    date: string
}

function HeaderBlog () {
    // const {name, position, date} = props
  return (
    <>
        <header className='mb-4 lg:mb-6 not-format'>
            <address className='flex items-center mb-6 not-italic'>
                <div className='inline-flex items-center mr-3 text-sm text-gray-900 dark:text-white'>
                    <img className="mr-4 w-16 h-16 rounded-full" src="" alt="" />
                    <div>
                        <a className='text-xl font-bold text-gray-900 dark:text-white' href="">Jese Leos</a>
                        <p className='text-base text-gray-500 dark:text-gray-400'>Graphic Designer, educator & CEO Flowbite</p>
                        <p className='text-base text-gray-500 dark:text-gray-400'><time>Feb. 8, 2022</time></p>
                    </div>
                </div>
            </address>
            <h1 className="mb-4 text-3xl font-extrabold leading-tight text-white lg:mb-6 lg:text-4xl">Best practices for successful prototypes</h1>
        </header>
    </>
  );
}

export default HeaderBlog