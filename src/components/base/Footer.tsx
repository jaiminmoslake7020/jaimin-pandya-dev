import React from 'react';
import SocialLinks from './SocialLinks';
import FaIcon from './FaIcon';

export type FooterPropTypes = {

};

const Footer = (props: FooterPropTypes) => {
    return (
        <footer className={"main-footer"}>
            <div>
                <p>Built with <FaIcon icon={"heart"} className={"text-red-400"} /> , React & Tailwind at Vancouver, BC, Canada</p>
            </div>
            <SocialLinks />
        </footer>
    );
}

export default Footer;
