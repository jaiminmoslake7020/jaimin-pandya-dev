import React from 'react';

export type NavPropTypes = {

};

const menuLinks = [
    {
        label: "Profile",
        content: "#profile"
    },
    {
        label: "Experience",
        content: "#experience"
    },
    {
        label: "Education",
        content: "#education"
    },
    {
        label: "Projects",
        content: "#projects"
    },
];

const Nav = (props: NavPropTypes) => {
    return (
        <nav className={"nav"}>
            {
                menuLinks.map(({label, content}) => <a href={content} className={"nav-link"} >{label}</a>)
            }
        </nav>
    );
}


export default Nav;
