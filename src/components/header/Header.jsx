import React from 'react'
import Menu from '../menu/Menu.jsx'
import Logo from '../../assets/icons/Logo.png'
import './Header.css'

const Header = (props) => {
    return (
        <div className="header">
            <div className="content">
                <img src={Logo} alt="Logo"/>
                <Menu />
            </div>
        </div>
    )
}

export default Header
