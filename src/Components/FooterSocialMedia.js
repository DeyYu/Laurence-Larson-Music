import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faFacebookSquare, faInstagram, faYoutube} from '@fortawesome/free-brands-svg-icons'
import '../Styles/Footer.css'

function FooterSocialMedia(){
    return(
        <div>
            <span className="FooterSocial">
                <FontAwesomeIcon
                icon={faFacebookSquare}
                onClick={() => window.location.href = 'https://www.facebook.com/LLLarsonMusic/'}
            />
            </span>
            <span className="FooterSocial">
                <FontAwesomeIcon
                icon={faYoutube}
                onClick={() => window.location.href = 'https://www.youtube.com/user/LLLarsonMusic/'}
            />
            </span>
            <span className="FooterSocial">
                <FontAwesomeIcon
                icon={faInstagram}
                onClick={() => window.location.href = 'https://www.instagram.com/lllarsonmusic/'}
            />
            </span>
        </div>
    )
}
export default FooterSocialMedia;