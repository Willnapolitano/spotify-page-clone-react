import React from 'react';
import Header from '../header/Header.jsx'
import Main from '../main/Main.jsx'
import Footer from '../footer/Footer.jsx';
import './App.css'



export default class App extends React.Component{
    render(){
        return(
            <div className="app">
               <Header />
               <Main />
               <Footer />
            </div>
        )
    }
}