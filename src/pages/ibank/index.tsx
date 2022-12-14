

import { Footer } from '@/common/footer';
import { Header } from '@/common/header';
import { Fragment } from 'react';
import { Link, Outlet } from 'react-router-dom';
import style from './style.module.scss';
   
//==============================
// 舊寫法 class component with constructor
//==============================

// class Ibank extends React.Component<any,any> {
//     constructor(props:any) {
//       super(props);
//       this.state = {
//         posts: {}
//       };
//     }

//     componentDidMount() {
//         this.useEffect();
//     }

//     render() {
//      return (
//             <Fragment>
//                 <Header  isLoggedIn={true}/>
//                     <div className="ibank">
//                         <ul>
//                             <li>
//                             台幣轉帳
//                             </li>
//                             <li>
//                             外幣轉帳
//                             </li>
//                             <li>
//                             餘額查詢
//                             </li>
//                             <li>
//                             個人設定
//                             </li>
//                         </ul>
//                         <div>
//                             <h1>{this.state.posts.title}</h1>
//                             <p>{this.state.posts.body}</p>
//                             {/* <button onClick={createPost}>Create Post</button> */}
//                         </div>
//                     </div>
//                 <Footer/>
//               </Fragment>
//      )   
//     }

//     private useEffect(){
//         axios.get(baseURL).then((response) => {
//             this.setState({posts: response.data})
//                 })
//     }
// } 

// export default Ibank;

//==============================
//新寫法 function with hook
//==============================

export function Ibank() {
    
    return (
        <Fragment>
        <Header/>
            <div className={style.ibank}>
                <ul>
                    <li>
                        <Link to="/ibank/twd">台幣轉帳</Link>
                    </li>
                    <li>
                        <Link to="/ibank/fnd">外幣轉帳</Link>
                    </li>
                    <li>
                        <Link to="/ibank/query">餘額查詢</Link>
                    </li>
                </ul>
                <div>
                    <Outlet/>
                </div>
            </div>
        <Footer/>
      </Fragment>
    );
}