

import axios from 'axios';
import { Fragment, useEffect, useState } from 'react';
import { Footer } from '../../common/footer';
import { Header } from '../../common/header';
import style from './style.module.scss';

const baseURL = "https://jsonplaceholder.typicode.com/posts";
   
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
    const [posts, setPosts] = useState<any>([{}]);
    
    useEffect(() => {
        axios.get(baseURL).then((response) => {
            setPosts(response.data);
        })
    }, []);
    
    return (
        <Fragment>
        <Header/>
            <div className={style.ibank}>
                <ul>
                    <li>
                    台幣轉帳
                    </li>
                    <li>
                    外幣轉帳
                    </li>
                    <li>
                    餘額查詢
                    </li>
                    <li>
                    個人設定
                    </li>
                </ul>
                <div>
                
                {posts.map((post:any,id:any) => {
                    return(
                    <div key={id}>
                    <h1>{post.title}</h1>
                    <p>{post.body}</p>
                    </div>
                    )
                })}
                    {/* <button onClick={createPost}>Create Post</button> */}
                </div>
            </div>
        <Footer/>
      </Fragment>
    );
}