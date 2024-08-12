import React from 'react';
import Nav from './Nav';

export type HeaderPropTypes = {

};

const Header = (props: HeaderPropTypes) => {
    return (
        <header>
            <div className={"logo"}>

            </div>
            <Nav />
        </header>
    );
}

Header.defaultProps = {};

export default Header;
