import React from 'react';

export type NavPropTypes = {
    showSidebar?: Function
};

const menuLinks = [
    {
        label: "Profile",
        content: "profile"
    },
    {
        label: "Experience",
        content: "experience"
    },
    {
        label: "Education",
        content: "education"
    },
    {
        label: "Projects",
        content: "projects"
    },
    {
        label: "Skills",
        content: "skills"
    },
];

const Nav = ({showSidebar}: NavPropTypes) => {
    return (
        <nav className={"nav nav-main"}>
            {
                menuLinks.map(({label, content}) => <a key={label} href={content} className={"nav-link"}
                    onClick={(e) => {
                        e.preventDefault();
                        const item = document.querySelector('.section.section-'+content);
                        if (item) {
                           item.scrollIntoView({ behavior: 'smooth' });
                           if (showSidebar) {
                               showSidebar(false);
                           }
                        }
                    }}
                >{label}</a>)
            }
        </nav>
    );
}




export default Nav;
