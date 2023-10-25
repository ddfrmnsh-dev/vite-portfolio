import * as React from 'react';
import PageWrapper from '../../PageWrapper';
import Banner from '../../components/Banner';
import {getTitleProject, getDataProject} from '../../utils/data.js'
import CardProject from './CardProject.js';

export interface IIndexProps {
  title: string
}

function Index () {
  const [title, setTitle] = React.useState('')
  const [data, setData] = React.useState('')

  console.log("test",data)
  React.useEffect(()=>{
    setTitle(getTitleProject())
    setData(getDataProject())
  }, [])

  return (
    <>
      <PageWrapper>
        <div className='container w-full max-w-xl mt-4'>
          <div className='w-full self-center px-2'>
          {Array.isArray(title) && title.map((p, index)=> (
            <Banner key={index} title={p.title} description={p.description}/>
          ))}
          </div>
            {Array.isArray(data) && data.map((d, index) => (
              <CardProject key={index} title={d.title} url={d.url} description={d.description} numberParams={d.id}/>
            ))}
          <div className='w-full self-center px-2 mx-auto'>

          </div>
        </div>
      </PageWrapper>
    </>
  );
}

export default Index