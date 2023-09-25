import * as React from 'react';
import HeaderBlog from './HeaderBlog';

export interface IArticleProps {
    children: React.ReactNode
}

function ArticleBlog (props: IArticleProps) {
  return (
    <>
        <article className='mx-auto w-full max-w-2xl format format-sm sm:format-base lg:format-lg format-blue dark:format-invert'>
            <HeaderBlog />
            {props.children}
        </article>
    </>
  );
}

export default ArticleBlog