import React from 'react';
import Nav from './Nav';
import ColorThemeSelector from './ColorThemeSelector';

export type HeaderPropTypes = {
    theme: string,
    setTheme: Function
};

const Header = (props: HeaderPropTypes) => {
    const {
        setTheme,
        theme
    } = props;
    return (
        <header className={"main-header"} >
            <div className={"logo"}>
                <a className={"logo-text"} href={"https://jaimin-pandya.netlify.app/"}><span>Jaimin</span><span>Pandya</span></a>
            </div>
            <Nav />
            <ColorThemeSelector theme={theme} setTheme={setTheme} />
        </header>
    );
}

Header.defaultProps = {};

export default Header;
