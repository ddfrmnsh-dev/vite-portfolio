import * as React from 'react';
import Header from './reusable/Header'
import Footer from './reusable/Footer'
import {Helmet, HelmetProvider} from "react-helmet-async"

export interface IPageWrapperProps {
    children: React.ReactNode;
}

function PageWrapper (props: IPageWrapperProps) {
  return (
    <>
    <HelmetProvider>
      <Helmet>
        <title>Porfolio | Dede Firmansah</title>
      </Helmet>
    </HelmetProvider>
      <Header />
      <div>
        {props.children}
      </div>
      <Footer />
    </>
  );
}

export default PageWrapper
