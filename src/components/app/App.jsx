import React from 'react';
import Header from '../header/Header.jsx'
import Footer from '../footer/Footer.jsx';



export default class App extends React.Component{
    render(){
        return(
            <div className="app">
               <Header />
            </div>
        )
    }
}