import React from 'react'
import './Menu.css'

export default (props) => {
    return(
        <div>
            <input id="menu-hamburguer" type="checkbox"/>
            <label htmlFor="menu-hamburguer">
                <div className="menu">
                    <span className="hamburguer"></span>
                </div>
            </label>
        </div>
    )

}