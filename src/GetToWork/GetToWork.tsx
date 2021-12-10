import React from 'react';
import style from './GetToWork.module.css'



 export const GetToWork=()=>{
     return(
         <div className={style.work}>
             <div className={style.container}>
             <h2>Let's work together</h2>
             <p className={style.p} >I'm interested in meeting new people and working on projects big and small...</p>
             <button className={style.btn}>Hire me</button>
                 </div>
         </div>
     )
 }