import React from 'react'
import FooterSocialMedia from './FooterSocialMedia'
import '../Styles/Footer.css';

function Footer(){
    return(
        <footer className="Footer">
            <div>
                <FooterSocialMedia/>
            </div>
            <div className="FooterCopy">
                &copy; Copyright 2020
            </div>
        </footer>
    )
}

export default Footer