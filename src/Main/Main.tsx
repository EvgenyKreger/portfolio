import React from 'react';
import style from './Main.module.css'
import photo from './../images/photo.png'


export const Main = () => {
    return (
        <div className={style.mainBlock}>
            <div className={style.container}>

                <div className={style.text}>
                    <span>Hi There</span>
                    <h1>My name is <span className={style.name}>Evgeny Kreger</span></h1>
                    <p> I am Front-end developer</p>
                </div>
                <div className={style.image}><img src={photo} alt="photo"/></div>

            </div>
        </div>
    )
}