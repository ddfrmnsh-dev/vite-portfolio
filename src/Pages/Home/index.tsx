import * as React from 'react';
import PageWrapper from '../../PageWrapper';
import SectionIntroduce from './SectionIntroduce';
import SectionAboutMe from './SectionAboutMe';

export interface IIndexProps {
}

function Index () {
  return (
    <>
    <PageWrapper>
        <div className='container w-full xl:w-1/2'>
            <SectionIntroduce />
            <SectionAboutMe/>
        </div>
    </PageWrapper>
    </>
  );
}

export default Index