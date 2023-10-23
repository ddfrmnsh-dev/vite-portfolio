import * as React from 'react';
import PageWrapper from '../../PageWrapper';
import Banner from '../../components/Banner';

export interface IIndexProps {
}

function Index () {
  return (
    <PageWrapper>
    <div className='container w-full xl:w-1/2 mt-4'>
      <div className='w-full self-center px-2'>
        <Banner title='test' description='tets' />
      </div>
    </div>
    </PageWrapper>
  );
}

export default Index