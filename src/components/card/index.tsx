import style from './style.module.scss';
  
export function Card(props:any){
    return (
        <div className={style.card}>
            <div> {props.children} </div> 
        </div>
    )
}