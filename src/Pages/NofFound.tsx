import * as React from 'react';
import PageWrapper from '../PageWrapper';


export interface IIndexProps {
}

function NotFound () {
  return (
    <>
    <PageWrapper>
        <div className='container w-full mx-auto max-w-xl'>
            <h1>Not Found 404</h1>
        </div>
    </PageWrapper>
    </>
  );
}

export default NotFound