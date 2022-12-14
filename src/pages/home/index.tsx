import { Footer } from "@src/common/footer";
import { Header } from "@src/common/header";
import { Button } from '@src/components/button';
import { Card } from '@src/components/card';
import { UploadFile } from '@src/components/upload-file';
import { Fragment } from 'react';

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