import { Fragment, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from "react-router-dom";

import { Footer } from "../../common/footer/footer";
import { Header } from "../../common/header/header";

import './login.scss';

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
            <div className="login">
                <div className="login-container">
                    <input type="text" placeholder='帳號' onChange={(e)=>{ setAccount(e.target.value) }} value={account} />
                    <input type="text" placeholder='密碼' onChange={(e)=>{ setPassword(e.target.value) }} value={password} />
                    <a onClick={()=>{login()}}>登入</a>
                </div>
            </div>
        <Footer/>
      </Fragment>
    );
}