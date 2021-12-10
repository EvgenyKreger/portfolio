import React from 'react';
import style from './Contact.module.css'


export const Contact = () => {
    return (
        <div className={style.contact}>
            <div className={style.container}>
                <h2>Contact</h2>
                <p>If you wanna get in touch, talk to me about a project collaboration or just say
                    hi, fill up the awesome form below or send an email.</p>
                    <form className={style.form}>
                    <input type="text" placeholder={'Email'}/>
                    <input type="text" placeholder={'Name'}/>
                    <textarea name={'Message'} placeholder={'Message'}> </textarea>
                    <button><span>SEND MESSAGE</span> </button>
                </form>
            </div>
        </div>
    )
}