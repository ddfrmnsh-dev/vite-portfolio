import * as React from 'react';
import CardList from './CardList';

export interface IIndexProps {
  children: React.ReactNode
}

function Index (props: IIndexProps) {
    const { children } = props

    // console.log("data card index", props)
  return (
    <>
     <div className=''>
        <CardList>
          {children}
        </CardList>
      </div> 
    </>
  );
}

export default Index