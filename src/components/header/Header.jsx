import React from 'react'
import Menu from '../menu/Menu.jsx'
import Logo from '../../assets/icons/Logo.png'
import './Header.css'

const Header = (props) => {
    return (
        <div className="header">
            <img src={Logo} alt="Logo"/>
            <Menu />
        </div>
    )
}

export default Header
