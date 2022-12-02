import { Fragment } from 'react';
import { Footer } from "../../common/footer/footer";
import { Header } from "../../common/header/header";
import './home.scss';

export function Home() {
    return (
        <Fragment>
        <Header/>
          <div className="home">
          </div>
        <Footer/>
      </Fragment>
    );
}