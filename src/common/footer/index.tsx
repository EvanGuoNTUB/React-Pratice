import style from './style.module.scss';

export function Footer() {
    return (
        <div className={style.footer}>
          <div>©全國農業金庫版權所有 建議瀏覽器設定Edge/解析度1024*768</div>
          <div>100 台北市中正區館前路71號‧ 電話： (02)2380-5100 FAX： (02)2380-5251</div>
        </div>
    );
}