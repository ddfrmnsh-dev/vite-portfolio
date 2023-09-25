import * as React from 'react';
import ArticleBlog from './Article';

export interface IIndexProps {
}

function Index (props: IIndexProps) {
  return (
    <>
        <main className='pt-8 pb-16 lg:pt-16 lg:pb-24 bg-white dark:bg-gray-900 antialiased'>
            <div className="flex justify-between px-4 mx-auto max-w-screen-xl">
                <ArticleBlog >
                  <h3>Welcome to my blog!</h3>
                </ArticleBlog>
            </div>
        </main> 
    </>
  );
}

export default Index