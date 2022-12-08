import { Fragment } from 'react';
import { Footer } from "../../common/footer/footer";
import { Header } from "../../common/header/header";
import { Card } from '../../components/card';
import './home.scss';

export function Home() {
    return (
        <Fragment>
        <Header/>
          <div className="home d-f">
            <Card label="身分證正面上傳"></Card>
            <Card label="身分證反面上傳"></Card>
          </div>
        <Footer/>
      </Fragment>
    );
}