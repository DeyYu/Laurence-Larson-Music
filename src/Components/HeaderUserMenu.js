import React from 'react'
import {Link} from 'react-router-dom'
import '../Styles/Header.css';

function HeaderUserMenu(props){
    return(
        <div>
            <div className="HeaderUserMenuTitle">
                App Name
            </div>
            <ul>
                <li>
                    <Link 
                    to="/Login" 
                    className="HeaderUserMenuli"
                    onClick={props.closeMenu}
                    >
                        Login
                    </Link>
                </li>
                <li>
                    <Link 
                    to="/SignUp" 
                    className="HeaderUserMenuli"
                    onClick={props.closeMenu}
                    >
                        Create account
                    </Link>
                </li>
            </ul>
        </div>
    )
}

export default HeaderUserMenu