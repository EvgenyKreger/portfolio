import React from 'react';
import style from './Skills.module.css'
import {Skills_React} from '../Skills_React/Skills_React';
import {Skills_Redux} from '../Skills_Redux/Skills_Redux';
import {Skills_JavaScript} from '../Skills_JavaScript/Skills_JavaScript';
import {Skills_TypeScript} from '../Skills_TypeScript/Skills_TypeScript';


export const Skills = () => {
    return (


        <div className={style.skills}>

            <div className={style.container}>
                <h2 className={style.title}>Skills</h2>
                <div className={style.skill}>
                    <Skills_React/>
                    <Skills_Redux/>
                    <Skills_JavaScript/>
                    <Skills_React/>
                    <Skills_Redux/>
                    <Skills_JavaScript/>

                </div>
            </div>
        </div>
    )
}