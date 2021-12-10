import React from 'react';
import style from './Footer.module.css'
import {Nav} from '../Nav/Nav';


export const Footer = () => {
    return (
        <div className={style.footer}>
            <div className={style.container}>
                <p>© 2021 All rights reserved</p>
            </div>
        </div>
    )
}