import React from 'react'

const Nav = (props) => {
    return(
        <nav>
            <h3>{props.title}</h3>
                <ol>
                    {props.children}
                </ol>
        </nav>
    )
}

export default Nav