import { Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

import logoImg from '@src/assets/images/logo.png';

import style from './style.module.scss';

export function Header() {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  const account = useSelector<any>(state => state.account);

  const logout = ()=>{
    dispatch({
      type: "CLEAR"
    }); 
    navigate('/');
  }

    return (
        <div className={style.header}>
            <div className={style.logo_img}>
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
            {account ? (
              <Fragment>
            <li>
              <Link to="/ibank">個人網路銀行</Link>
            </li>
            <li>
              <div><>{account}</>，您好！</div>
            </li>
            <li>
              <div onClick={logout}>登出</div>
            </li>
            </Fragment>
            ) : (
            <li>
              <Link to="/login">個人網路銀行</Link>
            </li>
            )}
          </ul>
        </div>
    );
}