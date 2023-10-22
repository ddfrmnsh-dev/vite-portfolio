import * as React from 'react';

export interface IBannerProps {
    title: string;
    description: string
}

function Banner (props: IBannerProps) {
    const {title, description} = props
  return (
    <>
        <section className="bg-center bg-no-repeat bg-[url('https://flowbite.s3.amazonaws.com/docs/jumbotron/conference.jpg')] bg-gray-700 bg-blend-multiply rounded-md">
            <div className="px-4 mx-auto max-w-screen-xl text-center py-6">
                <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white">{title}</h1>
                <p className="mb-8 text-lg font-normal text-gray-300 lg:text-xl px-6">{description}</p>
                <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
                    <a href="#" className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900">
                        Get started
                        <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                        </svg>
                    </a>
                </div>
            </div>
        </section>
    </>
  );
}

export default Banner