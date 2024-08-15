import React, {useCallback, useEffect} from 'react';

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

    const moveContent = useCallback((content:string) => {
        const item = document.querySelector('.section.section-'+content);
        if (item) {
            item.scrollIntoView({ behavior: 'smooth' });
            if (showSidebar) {
                showSidebar(false);
            }
        }
    }, [showSidebar])

    useEffect(() => {
        const handleWindowLoad = () => {
            const hash = window.location.hash.replaceAll("#", "");
            moveContent(hash);
        };

        // Add the event listener for window load
        window.addEventListener('load', handleWindowLoad);

        // Clean up the event listener on component unmount
        return () => {
            window.removeEventListener('load', handleWindowLoad);
        };
    }, [moveContent])

    return (
        <nav className={"nav nav-main"}>
            {
                menuLinks.map(({label, content}) => <a key={label} href={content} className={"nav-link"}
                    onClick={(e) => {
                        e.preventDefault();
                        moveContent(content);
                    }}
                >{label}</a>)
            }
            <a target="_blank" rel={"noreferrer"} className={"nav-link"} href={"https://drive.google.com/file/d/1QIa83hV9TDzm3e1pCVhg2aA6zx-NWd-y/view?usp=sharing"}>Resume</a>
        </nav>
    );
}




export default Nav;
