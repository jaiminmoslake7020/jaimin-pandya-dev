import React from 'react';
import SocialLinks from './SocialLinks';
import FaIcon from './FaIcon';

export const WebsiteInfo = () => {
    return <div className={"website-info"}>
        <p>Built with <FaIcon icon={"heart"} className={"text-red-400"} /> , React & Tailwind at Vancouver, BC, Canada</p>
    </div>
}

export type FooterPropTypes = {

};

const Footer = (props: FooterPropTypes) => {
    return (
        <footer className={"main-footer"}>
            <WebsiteInfo />
            <SocialLinks />
        </footer>
    );
}

export default Footer;
