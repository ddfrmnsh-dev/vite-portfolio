// import * as React from 'react';
// import Card from '../../reusable/Card'
import { Link } from 'react-router-dom';
import test from '../../assets/test.png'
import { Card } from 'flowbite-react';

export interface ICardProjectProps {
    title: string,
    description: string,
    url:string,
    id:number
}

function CardProject (props: ICardProjectProps) {
  const {title, description, id} = props

  // console.log('cardproject', props)
  return (
    <>
      <Card
      imgAlt="Meaningful alt text for an image that is not purely decorative"
      imgSrc={test}
      style={{ margin: 10 }}
      >
          <div className="">
              <a href="#">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{title}</h5>
              </a>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{description}</p>
              <Link to={`/projects/${id}`}>
              <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                  Read more
                  <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                  </svg>
              </a>
              </Link>
          </div>
      </Card>
    </>
  );
}

export default CardProject