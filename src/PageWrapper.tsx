import * as React from 'react';
import Header from './reusable/Header'
import {Helmet, HelmetProvider} from "react-helmet-async"

export interface IPageWrapperProps {
    children: React.ReactNode;
}

function PageWrapper (props: IPageWrapperProps) {
  return (
    <>
    <HelmetProvider>
      <Helmet>
        <title>Porfolio</title>
      </Helmet>
    </HelmetProvider>
      <Header />
      <div>
        {props.children}
      </div>
    </>
  );
}

export default PageWrapper
