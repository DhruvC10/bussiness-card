import React from 'react';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Main from './Components/Main';

export default function(){
    return(
        <div className='container'>
            <Header/>
            <Main/>
            <Footer/>
        </div>
    )
}