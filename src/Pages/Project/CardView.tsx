import * as React from 'react';
import {useParams} from 'react-router-dom';
import { getDataProject } from '../../utils/data.js'
import PageWrapper from '../../PageWrapper.js';

export interface ICardViewProps {
    dataCard: string;
}

function CardView (props: ICardViewProps) {
  const [data, setData] = React.useState('')

  let {numberParams} = useParams()

  React.useEffect(()=>{
    getDataProjects()
  }, [])

  const getDataProjects = () => {
    if(numberParams === undefined) {
      return <div>Loading...</div>;
    } else {
      let dataP = getDataProject()
      let filterData = dataP.filter((data)=> {
        return data.id == numberParams
      })
      console.log("data filter", filterData[0].details)
      setData(filterData[0].details)
    }
  }
  
  return (
     <PageWrapper>
     <div className='container w-full xl:w-1/2 mt-4'>
       <div className='w-full self-center px-2'>
       {/* {Array.isArray(title) && title.map((p, index)=> (
         <Banner key={index} title={p.title} description={p.description}/>
       ))} */}
       </div>
       {
        data.nama
       }
       <div className='w-full self-center px-2 mx-auto'>
       </div>
     </div>
   </PageWrapper>
  );
}

export default CardView