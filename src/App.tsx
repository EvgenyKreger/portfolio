import React from 'react';

import './App.css';
import {Header} from './Header/Header';
import {Main} from './Main/Main';
import {Skills} from './Skills/Skills';
import {My_Projects} from './My_projects/My_Projects';
import {GetToWork} from './GetToWork/GetToWork';
import {Contact} from './Contact/Contact';
import {Footer} from './Footer/Footer';




function App() {
    return (
        <div className="App">
            <Header/>
            <Main/>
            <Skills/>
            <My_Projects/>
            <GetToWork/>
            <Contact/>
            <Footer/>
        </div>
    );
}

export default App;
