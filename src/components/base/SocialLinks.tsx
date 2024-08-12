import React from 'react';
import FaIcon from './FaIcon';
import {IconProp} from '@fortawesome/fontawesome-svg-core';

export type SocialLinksPropTypes = {

};

const socialLinks = [
    {
        label: "Github",
        link: "https://github.com/jaiminmoslake7020",
        icon: "github"
    },
    {
        label: "Gitlab",
        link: "https://gitlab.com/jaiminpandya1591",
        icon: "gitlab"
    },
    {
        label: "LinkedIn",
        link: "https://www.linkedin.com/in/jaiminmoslake/",
        icon: "linkedin"
    },
    {
        label: "Stack Overflow",
        link: "https://stackoverflow.com/users/2542806/jaimin-moslake",
        icon: "stack-overflow"
    },
] as {
    label: string,
    link: string,
    icon: IconProp
}[];

const SocialLinks = (props: SocialLinksPropTypes) => {
    return (
        <nav className={"social-media-links-wrapper"} >
            {
                socialLinks.map(({label, link, icon}) => <a aria-label={label} target={"_blank"}
                    href={link}
                >
                    <FaIcon icon={["fab", icon] as IconProp} />
                </a>)
            }
        </nav>
    );
}

SocialLinks.defaultProps = {};

export default SocialLinks;
