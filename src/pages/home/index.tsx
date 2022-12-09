import { Fragment } from 'react';
import { Footer } from "../../common/footer";
import { Header } from "../../common/header";
import { Button } from '../../components/button';
import { Card } from '../../components/card';
import { UploadFile } from '../../components/upload-file';
import style from './style.module.scss';

export function Home() {
    return (
        <Fragment>
        <Header/>
          <div className={`${style.home} ${style.d_f}`}>
            <Card>
              <h2>身分證正面上傳</h2>
              <UploadFile /> <br />
              <Button label="上傳" onClick={() => { alert('ok');}} />
            </Card>
            <Card>
              <h2>身分證反面上傳</h2>
              <UploadFile /> <br />
              <Button label="上傳" onClick={() => { alert('ok');}} />
            </Card>
          </div>
        <Footer/>
      </Fragment>
    );
}