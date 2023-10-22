import * as React from 'react';

export interface ICardListProps {
    children: React.ReactNode
}

function CardList (props: ICardListProps) {
    const { children } = props
  return (
    <div className='max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700'>
      {children}
    </div>
  );
}

export default CardList