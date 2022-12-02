import { Link, useLocation } from "react-router-dom";

import logoImg from '../../assets/images/logo.png';

import './header.scss';

export function Header(props:any) {

  const location = useLocation();
  const isLoggedIn = props.isLoggedIn;

    return (
        <div className="header">
            <div className="logo-img">
                <img src={logoImg} alt="" />
            </div>
          <ul>
            <li>
              <Link to="/">回首頁</Link>
            </li>
            <li>
              <Link to="/download">元件下載</Link>
            </li>
            <li>
              <a href="https://www.agribank.com.tw/" target="_blank" rel="noreferrer">農業金庫網站</a>
            </li>
            <li>
              <Link to="/login">個人網路銀行</Link>
            </li>
            {isLoggedIn ? (
            <li>
              <div>{location.state.account}，您好！</div>
            </li>
            ) : null}
          </ul>
        </div>
    );
}