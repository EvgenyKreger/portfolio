import React from 'react';
import style from './My_Projects.module.css'


export const My_Projects = () => {
    return (


        <div className={style.projects}>

            <div className={style.container}>
                <h2  className={style.title}>My projects</h2>

                <div className={style.project}>
                    <div className={style.project1}>
                        <a className={style.link2} href="">Watch</a>
                        <div>
                            <h3>Social Network</h3>
                            <p> It is the most biggest project which I refresh every month and learning new
                                technologies. It helps me to be in trends.</p>
                            <a href=""> GitHub</a>
                        </div>
                    </div>

                    <div className={style.project1}>
                        <a className={style.link2} href="">Watch</a>
                        <div>
                            <h3>Todo List</h3>
                            <p> It is the most biggest project which I refresh every month and learning new
                                technologies. It helps me to be in trends.</p>
                            <a href=""> GitHub</a>
                        </div>

                    </div>


                    <div className={style.project1}>
                        <a className={style.link2} href="">Watch</a>
                        <div>
                            <h3>Counter</h3>
                            <p> It is the most biggest project which I refresh every month and learning new
                                technologies. It helps me to be in trends.</p>
                            <a href=""> GitHub</a>
                        </div>

                    </div>


                </div>

            </div>
        </div>
    )
}