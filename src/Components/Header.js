import React from 'react'
import HeaderNav from './HeaderNav'
import HeaderLogo from './HeaderLogo';
import HeaderUser from './HeaderUser';
import '../Styles/Header.css'

function Header(){
    return(
        <header className= "Header">
            <HeaderLogo/>
            <HeaderNav/>
            <HeaderUser/>
        </header>
    )
}

export default Header;