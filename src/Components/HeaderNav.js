import React from 'react'
import {Link} from 'react-router-dom';
import '../Styles/Header.css'

function HeaderNav(){
    return(
        <div>
            <ul className="HeaderNavUl">
                <li className="HeaderNavLi">
                    <Link 
                    to="/" 
                    className="hover.HeaderNavLi"
                    >
                        Home
                    </Link>
                </li>
                <li class="HeaderNavLi">
                    <Link 
                    to="/about" 
                    className="hover.HeaderNavLi"
                    >
                        About
                    </Link>
                </li>
                <li class="HeaderNavLi">
                    <Link 
                    to="/Blog" 
                    className="hover.HeaderNavLi"
                    >
                        Blog
                    </Link>
                </li>
            </ul>
        </div>
    )
}
export default HeaderNav;