import { Fragment } from 'react';
import { Footer } from "../../common/footer/footer";
import { Header } from "../../common/header/header";
import './download.scss';

const handleClick = (event:any) => {
  if (event.target.parentElement.classList.contains('open')) {
    event.target.parentElement.classList.remove('open');
  } else {
    event.target.parentElement.className += " open";
  }
};

export function Download() {
    return (
      <Fragment>
      <Header/>
    <div className="download">
      <div className="title">元件下載</div>
      <div onClick={handleClick} className="panel-box">
        <div className="panel-item">
          <div className="panel-item-title">title 1</div>
          <div className="panel-item-content">content 1</div>
        </div>
        <div className="panel-item">
          <div className="panel-item-title">title 2</div>
          <div className="panel-item-content">content 2</div>
        </div>
        <div className="panel-item">
          <div className="panel-item-title">title 3</div>
          <div className="panel-item-content">content 3</div>
        </div>
      </div>
    </div>
      <Footer/>
    </Fragment>
    );
}