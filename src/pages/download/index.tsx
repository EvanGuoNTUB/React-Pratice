import { Footer } from "@/common/footer";
import { Header } from "@/common/header";
import { Fragment } from 'react';
import style from './style.module.scss';

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
    <div className={style.download}>
      <div className={style.title}>元件下載</div>
      <div onClick={handleClick} className={style.panel_box}>
        <div className={style.panel_item}>
          <div className={style.panel_item_title}>title 1</div>
          <div className={style.panel_item_content}>content 1</div>
        </div>
        <div className={style.panel_item}>
          <div className={style.panel_item_title}>title 2</div>
          <div className={style.panel_item_content}>content 2</div>
        </div>
        <div className={style.panel_item}>
          <div className={style.panel_item_title}>title 3</div>
          <div className={style.panel_item_content}>content 3</div>
        </div>
      </div>
    </div>
      <Footer/>
    </Fragment>
    );
}