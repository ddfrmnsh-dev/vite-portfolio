import * as React from 'react';
import {useParams} from 'react-router-dom';
import { getDataProject } from '../../utils/data.js'

export interface ICardViewProps {
    dataCard: string;
}

function CardView (props: ICardViewProps) {

  const dataCard = props;

  const [data, setData] = React.useState('')
  const datas = Array.isArray(data)

  let { id } = useParams()
  React.useEffect(()=>{
    getDataProjects()
  }, [])
  
  console.log("card view", data)

  const getDataProjects = () => {
    if(id === undefined) {
      return <div>Loading...</div>;
    } else {
      setData(getDataProject())
    }
  }
  
  return (
    <div>
      <h1>testt {Array.isArray(data) && data.map((datas)=> (
        datas.title
      ))}</h1>
    </div>
  );
}

export default CardView