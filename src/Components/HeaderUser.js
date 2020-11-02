import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import {useTransition, animated} from 'react-spring'
import HeaderUserMenu from './HeaderUserMenu'
import '../Styles/Header.css'

function HeaderUser(){
    const[showMenu, setShowMenu] = useState(false)

    const masktransitions = useTransition(showMenu, null, {
        from: { position: 'absolute', opacity: 0 },
        enter: { opacity: 1 },
        leave: { opacity: 0 },
    })

    const menutransitions = useTransition(showMenu, null, {
        from: { opacity: 0, transform:'translateY(-100%)' },
        enter: { opacity: 1, transform: 'translateX(0%)' },
        leave: { opacity: 0, transform:'translateX(-100%)' },
    })

    return(
        <nav>
            <span className="HeaderUserIcon">
                <FontAwesomeIcon
                    icon={faUser}
                    onClick={() => setShowMenu(!showMenu)}
                />
            </span>
            {
                masktransitions.map(({ item, key, props }) => 
                    item && 
                    <animated.div 
                    key={key} 
                    style={props}
                    className="bg-black-t-50 fixed top-0 left-0 w-full h-full z-50"
                    onClick={() => setShowMenu(false)}
                    >
                    </animated.div>)
            }
            {
                menutransitions.map(({ item, key, props }) => 
                    item && 
                    <animated.div 
                    key={key} 
                    style={props}
                    className="fixed bg-white top-0 right-0 z-50 shadow p-3"
                    >
                        <HeaderUserMenu
                            closeMenu={() => setShowMenu(false)}
                        />
                    </animated.div>)
            }
        </nav>
    )
}
export default HeaderUser