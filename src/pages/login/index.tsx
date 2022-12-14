import { Footer } from "@/common/footer";
import { Header } from "@/common/header";
import { Fragment, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from "react-router-dom";

import style from './style.module.scss';

export function Login(){

  const navigate = useNavigate();
  const [account,setAccount] = useState("");
  const [password,setPassword] = useState("");
  
  const dispatch = useDispatch();

  const login = () => {
    if(account){
      dispatch({
        account: account, 
        password: password,
        type: "LOGIN"
      })
      navigate('/ibank');
    } else{
      alert("請輸入帳號密碼！");
    }
  }

    return (
        <Fragment>
        <Header/>
            <div className={style.login}>
                <div className={style.login_container}>
                    <input type="text" placeholder='帳號' onChange={(e)=>{ setAccount(e.target.value) }} value={account} />
                    <input type="text" placeholder='密碼' onChange={(e)=>{ setPassword(e.target.value) }} value={password} />
                    <a onClick={login}>登入</a>
                </div>
            </div>
        <Footer/>
      </Fragment>
    );
}